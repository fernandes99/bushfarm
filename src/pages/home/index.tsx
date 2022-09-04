import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store"
import { setPlantationList } from "../../store/reducers/plantationList"

import { Modal } from "../../components/modal"
import { PlantationBlock } from "../../components/plantation"

import { Box, Background } from "./styles"

import { Plantation } from "../../service/plantation"

export const HomePage = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);

    useEffect(() => {
        Plantation.get.all().then(res => dispatch(setPlantationList(res)));
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