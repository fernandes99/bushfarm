import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Modal } from "../../components/modal"
import { PlantationBlock } from "../../components/plantation"
import { Plantation } from "../../service/plantation"
import { RootState } from "../../store"
import { setPlantationList } from "../../store/reducers/plantationList"
import { Box, Background } from "./styles"

export const HomePage = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);

    useEffect(() => {
        // eslint-disable-next-line
        Plantation.get.all()
            .then(res => dispatch(setPlantationList(res)));

        // eslint-disable-next-line
    }, [])

    return (
        <Box>
            <Background>
                <PlantationBlock />
                {global.modal.open &&
                    <Modal />
                }
            </Background>
        </Box>
    )
}