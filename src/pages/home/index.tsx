import { useEffect, useState } from "react"
import { fields } from "../../components/fields"
import { Plantation } from "../../service/plantation"
import { Box, Background, FieldList, FieldItem } from "./styles"

export const HomePage = () => {
    const [ allPlantation, setAllPlantation ] = useState<any>();

    useEffect(() => {
        Plantation.get.all().then(res => setAllPlantation(res));
    }, [])

    return (
        <Box>
            <Background>
                {allPlantation
                    ? <FieldList>
                        {
                            allPlantation.map((field: any) => {
                                let Component = field.state === 'empty' ? fields[field.state] : fields[field.type][field.state];
                                let tooltip:string = 'Cultivate';

                                if (field.state === "growing") {
                                    let current:any = new Date();
                                        current = current.getTime();
                                    let matureAt:any = new Date(field.mature_at);
                                        matureAt = matureAt.getTime();

                                    let diff = Math.round((matureAt - current) / 1000);
                                    let day = Math.floor(diff / (24 * 60 * 60));
                                    diff = diff - (day * 24 * 60 * 60);

                                    let hour = Math.floor(diff / (60 * 60));
                                    diff = diff - (hour * 60 * 60);

                                    let minute = Math.floor(diff/(60));
                                    diff = diff - (minute * 60);

                                    let second = diff;
                                    tooltip = `${day}d${hour}h${minute}m to cultivate`;
                                }

                                if (field.state === "mature") {
                                    tooltip = 'Ready to cultive';
                                }

                                return (
                                    <FieldItem key={field.id} tooltip={tooltip}>
                                        <Component />
                                    </FieldItem>
                                )
                            })
                        }
                    </FieldList>
                    : null}
                {/* <FieldList>
                    <fields.empty />
                    <fields.tomato.growing />
                    <fields.tomato.mature />
                    <fields.bellPepper.growing />
                    <fields.bellPepper.mature />
                    <fields.carrot.growing />
                    <fields.carrot.mature />
                    <fields.beet.growing />
                    <fields.beet.mature />
                    <fields.empty />
                </FieldList> */}
            </Background>
        </Box>
    )
}