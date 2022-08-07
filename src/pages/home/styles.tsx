import styled from 'styled-components';

export const Box = styled.div`
    
`

export const Background = styled.div`
    position: relative;
    background-image: url("https://i.imgur.com/ycEWnZ6.png");
    background-size: cover;
    height: 100vh;
`

export const FieldList = styled.ul`
    position: absolute;
    bottom: 10%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, max-content);
    grid-template-rows: repeat(2, 120px);
    gap: 52px 62px;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;

    
`

export const FieldItem = styled.li.attrs((props: any) => props)`
    position: relative;
    cursor: pointer;

    &:before {
        content: '${props => props.tooltip}';
        position: absolute;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.75);
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        padding: 8px 12px;
        border-radius: 4px;
        color: white;
        text-align: center;
        z-index: 1;
        transition: all .3s;
    }

    img {
        transition: all .1s;
    }

    &:hover {
        &:before {
            opacity: 1;
        }

        img {
            transform: scale(1.03);
        }
    }
`