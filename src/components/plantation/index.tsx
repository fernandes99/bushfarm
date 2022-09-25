import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openModal, setNotify } from "../../store/reducers/global";
import { PlatationGeneralStateType } from "../../store/types";

import { getDiffTime } from "../../utils/general";
import { fields } from "../fields";
import { FieldItem, FieldList, FieldAction } from "./styles";

export const PlantationBlock = () => {
    const dispatch = useDispatch();
    const plantationList = useSelector((state: RootState) => state.plantationList);

    useEffect(() => {
        console.log(plantationList);
    }, [plantationList])

    return (
        <>
            {!!plantationList
                && <FieldList>
                    {plantationList.map((field: PlatationGeneralStateType) => {
                        let FieldComponent = fields[field.state];
                        let tooltip:string = '';
                        let action:any;

                        switch (field.state) {
                            case 'empty':
                                action = () => dispatch(openModal('shop'));
                                break;
                            
                            case 'growing':
                                if (!field.type) return;

                                const { day, hour, minute, second } = getDiffTime(field.mature_at);
                                
                                if (hour > 24) `${minute}m ${second}s to cultivate`;
                                if (day > 1) tooltip = `${hour}h ${minute}m to cultivate`;
                                else tooltip = `${day}d ${hour}h to cultivate`;

                                FieldComponent = fields[field.type][field.state];
                                break;

                            case 'mature':
                                if (!field.type) return;

                                tooltip = 'Ready to cultive';
                                FieldComponent = fields[field.type][field.state];
                                action = () => {
                                    dispatch(setNotify({ show: true, message: `You cultivate ${field.type} 🤑` }));
                                    setTimeout(() => dispatch(setNotify({ show: true, message: `You gained 800 BTC 🤑` })), 200);
                                }
                        }

                        return (
                            <FieldItem key={field.id} tooltip={tooltip} onClick={action}>
                                {/* {field.state != 'empty' &&
                                    <Icon icon="carbon:overflow-menu-horizontal" width={28} color="#fff" fill="#fff" />
                                } */}
                                {field.state === 'empty' &&
                                    <FieldAction>
                                        Buy seed
                                    </FieldAction>
                                }
                                <FieldComponent />
                            </FieldItem>
                        )
                    })
                    }
                </FieldList>
            }
        </>
    )
}