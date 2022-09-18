import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openModal, setNotify } from "../../store/reducers/global";
import { PlatationGeneralStateType } from "../../store/types";

import { getDiffTime } from "../../utils/general";
import { fields } from "../fields";
import { FieldItem, FieldList } from "./styles";

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
                        let tooltip: string = 'Cultivate';
                        const handleAction = () => {
                            if (field.state === 'empty') {
                                dispatch(openModal('shop'));
                            }

                            if (field.state === 'mature') {
                                dispatch(setNotify({ show: true, message: `You gained 800 BTC 🤑` }));
                            }
                        }

                        if (field.state === 'empty') {
                            
                        }

                        if (field.state === 'growing' && field.type) {
                            const { day, hour, minute } = getDiffTime(field.mature_at);

                            tooltip = `${day}d${hour}h${minute}m to cultivate`;
                            FieldComponent = fields[field.type][field.state];
                        }

                        if (field.state === 'mature' && field.type) {
                            tooltip = 'Ready to cultive';
                            FieldComponent = fields[field.type][field.state];
                        }

                        return (
                            <FieldItem key={field.id} tooltip={tooltip} onClick={handleAction}>
                                {/* {field.state != 'empty' &&
                                    <Icon icon="carbon:overflow-menu-horizontal" width={28} color="#fff" fill="#fff" />
                                } */}
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