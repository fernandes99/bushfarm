import { Body, Wallet, Box, Header, Item, List } from "./styles"
import logo from "../../assets/img/logo.svg";

export const Navigation = () => {
    return (
        <Box>
            <Header>
                <img src={logo} width="110px" />
            </Header>
            <Body>
                <Wallet>
                    <span>1250,20</span>
                    <div>{`<>`}</div>
                    <span>201,53$</span>
                </Wallet>
                <List>
                    <Item onClick={() => alert('Você clicou em um item 😄')}>
                        Transactions
                    </Item>
                    <Item onClick={() => alert('Você clicou em um item 😄')}>
                        Inventory
                    </Item>
                    <Item onClick={() => alert('Você clicou em um item 😄')}>
                        Shop
                    </Item>
                    <Item onClick={() => alert('Você clicou em um item 😄')}>
                        Logout
                    </Item>
                </List>
            </Body>
        </Box>
    )
}