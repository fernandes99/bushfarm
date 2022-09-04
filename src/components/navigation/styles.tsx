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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;

    svg:hover {
        color: #15b946 !important;
    }
`

export const Body = styled.div`
    margin-top: 12px;
`

export const Wallet = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr .1fr;
    align-items: center;
    gap: 8px;
    border: 1px solid #00000015;
    border-radius: 8px;
    padding: 16px 8px 16px 16px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all .1s;

    &:hover {
        transform: scale(1.01) translateY(-2px);
        border-color: #15b946;

        svg {
            color: #15b946 !important;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-items: center;
    }

    strong, span {
        line-height: 120%;
    }

    strong {
        font-size: 20px;
    }

    span {
        opacity: .5;
    }


`

export const List = styled.ul`
    
`

export const Item = styled.li`
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 16px;
    padding: 4px 8px;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        border-left: #15b946 2px solid;
        color: #15b946;

        svg {
            color: #15b946 !important;
        }
    }
`