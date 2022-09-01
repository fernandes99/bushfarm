import styled from 'styled-components';

export const Box = styled.div`
    position: fixed;
    top: 16px;
    left: 16px;
    
    display: flex;
    flex-direction: column;
    width: 280px;
    background: rgba(255, 255, 255, .95);
    padding: 16px;
    border-radius: 12px;
    z-index: 1;

`

export const Header = styled.div`
    padding: 8px;
    margin-bottom: 12px;
`

export const Body = styled.div`
    
`

export const Wallet = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #00000015;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 12px;
`

export const List = styled.ul`
    
`

export const Item = styled.li`
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background: #15b946;
        color: #fff;
    }
`