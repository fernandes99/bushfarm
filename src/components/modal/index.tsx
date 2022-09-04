import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeModal } from "../../store/reducers/global";

import tomato from "../../assets/img/tomato.svg";
import beet from "../../assets/img/beet.svg";
import bellpepper from "../../assets/img/bellpepper.svg";
import carrot from "../../assets/img/carrot.svg";
import coin from "../../assets/img/bush_coin.svg";

import { Overlay, Box, Body, List, Item, Info, Button } from "./styles"

export const Modal = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);

    const ItemShop = (props: { image: string, name: string, price: number }) => (
        <Item>
            <img src={props.image} alt={props.name} width={120} />
            <h4>{props.name}</h4>
            <Info>
                <div>
                    <img src={coin} width={20} alt="Bush Coin" />
                    <span>{props.price} BTC</span>
                </div>
                <Button>Buy</Button>
            </Info>
        </Item>
    )

    return (
        <Overlay onClick={() => dispatch(closeModal(true))}>
            <Box>
                {global.modal.type === "shop" && 
                    <Body>
                        <h3>Shop</h3>
                        <List>
                            <ItemShop image={tomato} name={"Tomato"} price={120} />
                            <ItemShop image={carrot} name={"Carrot"} price={250} />
                            <ItemShop image={beet} name={"Beet"} price={420} />
                            <ItemShop image={bellpepper} name={"Bellpepper"} price={980} />
                        </List>
                    </Body>   
                }

                {global.modal.type === "transactions" && 
                    <span>Transactions Modal</span>
                }

                {global.modal.type === "inventory" && 
                    <span>Inventory Modal</span>
                }
            </Box>
        </Overlay>
    )
}