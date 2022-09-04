import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Body, Wallet, Box, Header, Item, List } from "./styles"
import logo from "../../assets/img/logo.svg";
import coin from "../../assets/img/bush_coin.svg";
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/reducers/global';

export const Navigation = () => {
    const dispatch = useDispatch();
    const [showBody, setShowBody] = useState<boolean>(true); 

    return (
        <Box>
            <Header>
                <img src={logo} width="110px" alt="Logo Bush" />
                <Icon icon={showBody ? "akar-icons:arrow-up" : "akar-icons:arrow-down"} onClick={() => setShowBody(!showBody)} width={24} color="#D0D0D0" cursor='pointer' />
            </Header>
            {showBody &&
                <Body>
                    <Wallet title='Show transactions'>
                        <img src={coin} width="100%" alt="Bush Coin" />
                        <div>
                            <strong>1,250.12 BTC</strong>
                            <span>12,323.52 USD</span>
                        </div>
                        <Icon icon="akar-icons:chevron-right" width={24} color="#D0D0D0" /> 
                    </Wallet>
                    <List>
                        <Item onClick={() => dispatch(openModal('transactions'))} title='Go to transactions'>
                            <Icon icon="mingcute:transfer-line" width={20} color="#D0D0D0" />
                            Transactions
                        </Item>
                        <Item onClick={() => dispatch(openModal('inventory'))} title='Go to inventory'>
                            <Icon icon="akar-icons:shipping-box-01" width={20} color="#D0D0D0" />
                            Inventory
                        </Item>
                        <Item onClick={() => dispatch(openModal('shop'))} title='Go to shop'>
                            <Icon icon="akar-icons:shopping-bag" width={20} color="#D0D0D0" />
                            Shop
                        </Item>
                        <Item onClick={() => alert('Você clicou em logout 😄')} title='Logout'>
                            <Icon icon="majesticons:logout-line" width={20} color="#D0D0D0" />
                            Logout
                        </Item>
                    </List>
                </Body>
            }
        </Box>
    )
}