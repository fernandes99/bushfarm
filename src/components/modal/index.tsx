import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeModal } from "../../store/reducers/global";

import { Overlay, Box } from "./styles"

export const Modal = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);


    return (
        <Overlay onClick={() => dispatch(closeModal(true))}>
            <Box>
                {global.modal.type == "shop" && 
                    <span>Shopping Modal</span>
                }

                {global.modal.type == "transactions" && 
                    <span>Transactions Modal</span>
                }

                {global.modal.type == "inventory" && 
                    <span>Inventory Modal</span>
                }
            </Box>
        </Overlay>
    )
}