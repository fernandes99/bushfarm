import { useEffect, useState } from "react"
import { fields } from "../../components/fields"
import { Plantation } from "../../service/plantation"
import { Box, Background, FieldList } from "./styles"

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
                                let Component = field.state == 'empty' ? fields[field.state] : fields[field.type][field.state];
                                return (<Component />)
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