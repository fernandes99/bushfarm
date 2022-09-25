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
import { addUserInventorySeeds, setUserInventory } from "../../store/reducers/user";
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

    const buySeed = (type: string, name: string) => {
        dispatch(addUserInventorySeeds({ type, name, exchange_value: 200, buyed_at: Date.now() }));
        dispatch(setNotify({ show: true, message: `You buy ${type} 🤩` }));
        dispatch(openModal('inventory'));
    }

    const plantSeed = (type: string) => {
        let slot:any = prompt("For which slot?", "0");
            slot = Number(slot);
        debugger
    }

    const getImage = (type: string) => {
        if (type == 'tomato') return tomato
        if (type == 'carrot') return carrot
        if (type == 'beet') return beet
        return bellpepper
    }

    return (
        <Overlay className="overlay" onClick={handleOverlay}>
            <Box>
                {/* TODO: Separar em componentes cada estado dos modais */}
                {global.modal.type === "shop" &&
                    <Body>
                        <h3>Shop</h3>
                        <List>
                            <ProductItem image={tomato} name={"Tomato"} price={120} onClick={() => buySeed('tomato', 'Tomato')} />
                            <ProductItem image={carrot} name={"Carrot"} price={250} onClick={() => buySeed('carrot', 'Carrot')} />
                            <ProductItem image={beet} name={"Beet"} price={420} onClick={() => buySeed('beet', 'Beet')} />
                            <ProductItem image={bellpepper} name={"Bellpepper"} price={980} onClick={() => buySeed('bellpepper', 'Beelpepper')} />
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
                                        image={getImage(seed.type)}
                                        name={seed.name}
                                        onClick={() => plantSeed(seed.type)}
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