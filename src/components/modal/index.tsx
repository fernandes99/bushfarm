import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeModal, openModal, setNotify } from "../../store/reducers/global";

import tomato from "../../assets/img/tomato.svg";
import beet from "../../assets/img/beet.svg";
import bellpepper from "../../assets/img/bellpepper.svg";
import carrot from "../../assets/img/carrot.svg";
import coin from "../../assets/img/bush_coin.svg";

import { Overlay, Box, Body, List, Item, Info, Button } from "./styles"
import { setUserInventory } from "../../store/reducers/user";
import { SeedType } from "../../store/types";

export const Modal = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: RootState) => state.global);
    const user = useSelector((state: RootState) => state.user);

    const ProductItem = (props: { image: string, name: string, price?: number, onClick: MouseEventHandler<HTMLButtonElement> }) => (
        <Item>
            <img src={props.image} alt={props.name} width={120} />
            <h4>{props.name}</h4>
            <Info>
                {global.modal.type === "shop" &&
                    <>
                        <div>
                            <img src={coin} width={20} alt="Bush Coin" />
                            <span>{props.price} BTC</span>
                        </div>
                        <Button onClick={props.onClick}>
                            Buy
                        </Button>
                    </>
                }

                {global.modal.type === "inventory" &&
                    <Button onClick={props.onClick}>
                        Plant
                    </Button>
                }
            </Info>
        </Item>
    )

    const handleOverlay = (ev: any) => {
        if (!ev.target.classList.contains('overlay')) return;
        dispatch(closeModal(true));
    }

    const handleClickItem = (name: string) => {
        dispatch(setUserInventory({ ...user.inventory.seeds, name }));
        dispatch(setNotify({ show: true, message: `You buy ${name} 🤩` }));
        dispatch(openModal('inventory'));
    }

    return (
        <Overlay className="overlay" onClick={handleOverlay}>
            <Box>
                {/* TODO: Separar em componentes cada estado dos modais */}
                {global.modal.type === "shop" &&
                    <Body>
                        <h3>Shop</h3>
                        <List>
                            <ProductItem image={tomato} name={"Tomato"} price={120} onClick={() => handleClickItem('Tomato')} />
                            <ProductItem image={carrot} name={"Carrot"} price={250} onClick={() => handleClickItem('Carrot')} />
                            <ProductItem image={beet} name={"Beet"} price={420} onClick={() => handleClickItem('Beet')} />
                            <ProductItem image={bellpepper} name={"Bellpepper"} price={980} onClick={() => handleClickItem('Bellpepper')} />
                        </List>
                    </Body>
                }

                {global.modal.type === "transactions" && 
                    <span>Transactions Modal</span>
                }

                {global.modal.type === "inventory" && 
                    <Body>
                        <h3>Inventory</h3>
                        <List>
                            {user.inventory.seeds?.map((seed: SeedType) => {

                                    return <ProductItem
                                        key={seed.id}
                                        image={tomato}
                                        name={seed.type}
                                        onClick={() => handleClickItem(seed.type)}
                                    />
                                }
                            )}
                        </List>
                    </Body>
                }
            </Box>
        </Overlay>
    )
}