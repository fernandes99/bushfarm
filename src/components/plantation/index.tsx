import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { getDiffTime } from "../../utils/general";
import { fields } from "../fields";
import { FieldItem, FieldList } from "./styles";

export const PlantationBlock = () => {
    const plantationList = useSelector((state: RootState) => state.plantationList);

    useEffect(() => {
        console.log(plantationList);
    }, [plantationList])

    return (
        <>
            { !!plantationList
                && <FieldList>
                    {plantationList.map((field: any) => {
                        let FieldComponent = fields[field.state];
                        let tooltip: string = 'Cultivate';

                        if (field.state === 'empty') {
                            
                        }

                        if (field.state === 'growing') {
                            const { day, hour, minute } = getDiffTime(field.mature_at);

                            tooltip = `${day}d${hour}h${minute}m to cultivate`;
                            FieldComponent = fields[field.type][field.state];
                        }

                        if (field.state === 'mature') {
                            tooltip = 'Ready to cultive';
                            FieldComponent = fields[field.type][field.state];
                        }

                        return (
                            <FieldItem key={field.id} tooltip={tooltip}>
                                <Icon icon="carbon:overflow-menu-horizontal" width={28} color="#fff" />
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