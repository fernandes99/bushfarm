import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { getDiffTime } from "../../utils/general";
import { fields } from "../fields";
import { FieldItem, FieldList } from "./styles";

export const PlantationBlock = () => {
    const plantationList = useSelector((state: RootState) => state.plantationList);

    return (
        <>
            { !!plantationList
                && <FieldList>
                    {plantationList.map((field: any) => {
                        let FieldComponent = fields[field.state];
                        let tooltip: string = 'Cultivate';
                        let handleClick: () => void;

                        if (field.state === 'empty') {
                            handleClick = () => {
                                alert('Você clicou em um campo vazio');
                            }
                        }

                        if (field.state === 'growing') {
                            const { day, hour, minute } = getDiffTime(field.mature_at);

                            tooltip = `${day}d${hour}h${minute}m to cultivate`;
                            FieldComponent = fields[field.type][field.state];
                            handleClick = () => {
                                alert('Você clicou em um campo crescendo');
                            }
                        }

                        if (field.state === 'mature') {
                            tooltip = 'Ready to cultive';
                            FieldComponent = fields[field.type][field.state];
                            handleClick = () => {
                                alert('Você clicou em um campo maduro');
                            }
                        }

                        return (
                            <FieldItem key={field.id} tooltip={tooltip}>
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