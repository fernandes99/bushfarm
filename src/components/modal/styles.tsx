import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000000b0;
    z-index: 1;
`

export const Box = styled.div`
    height: 400px;
    width: 720px;
    position: fixed;
    top: 16px;
    left: 308px;
    background: #fff;
    border-radius: 10px;
    padding: 8px;
    overflow: hidden;
`

export const Body = styled.div`
    padding: 16px;
    height: 100%;
    overflow: overlay;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #ececec;
    }

    h3 {
        line-height: 100%;
        font-size: 21px;
        margin-bottom: 24px;
        font-weight: bold;
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 12px;

    h4 {
        font-size: 20px;
        font-weight: bold;
        margin: 12px 0 16px;
        text-align: center;
        line-height: 100%;
    }
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            margin-left: 4px;
        }
    }
`

export const Button = styled.button`
    font-size: 14px;
    font-weight: bold;
    background: #15B946;
    color: #fff;
    padding: 4px 16px;
    border-radius: 4px;
    transition: all .1s;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
    }
`

export const SelectBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffffed;
    padding: 24px;

    ul {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(5, 1fr);
        gap: 8px;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 120px;
            border: 1px solid #dddddd;
            border-radius: 8px;
            cursor: no-drop;

            &.empty {
                border: unset;
                background-color: #15b946;
                color: white;
                font-weight: bold;
                transition: all .1s;
                cursor: pointer;

                &:hover {
                    transform: translateY(-2px);
                }
            }
        }
    }

    button {
        margin-top: 20px;
        background-color: #d23333;
        color: white;
        font-weight: bold;
        padding: 6px 24px;
        border-radius: 6px;
        
        transition: all .1s;
        cursor: pointer;

        &:hover {
            transform: translateY(-2px);
        }
    }
`