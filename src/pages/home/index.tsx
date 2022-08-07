import { fields } from "../../components/fields"
import { Box, Background, FieldList } from "./styles"

export const HomePage = () => {

    return (
        <Box>
            <Background>
                <FieldList>
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
                </FieldList>
            </Background>
        </Box>
    )
}