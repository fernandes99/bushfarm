import styled from 'styled-components';

export const FieldList = styled.ul`
    position: absolute;
    bottom: 30%;
    width: 100%;
    height: 20%;

    display: grid;
    grid-template-columns: repeat(5, 15%);
    grid-template-rows: repeat(2, 100%);
    gap: 8% 2%;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
`

export const FieldItem = styled.li.attrs((props: any) => props)`
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:before {
        content: '${props => props.tooltip}';
        display: ${props => props.tooltip ? 'block' : 'none'};
        position: absolute;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.85);
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        padding: 8px 12px;
        border-radius: 8px;
        color: white;
        text-align: center;
        z-index: 1;
        transition: all .3s;
    }

    img {
        transition: all .1s;
    }

    svg {
        opacity: 0;
        position: absolute;
        right: 30px;
        top: 20px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        border-radius: 50%;
        transition: all .1s;
    }

    &:hover {
        &:before, & svg {
            opacity: 1;
        }

        img {
            transform: scale(1.03);
        }
    }
`

export const FieldAction = styled.button`
    position: absolute;
    bottom: -20px;

    background: linear-gradient(180deg, #FFFFFF 0%, #CFE4DD 100%);
    border-radius: 6px;
    padding: 4px 24px;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    color: #007248;
    z-index: 1;
    animation: slide-top 500ms ease-in infinite alternate both;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 42%;
        width: 12px;
        height: 12px;
        transform: rotate(45deg) translateX(-50%);

        border-radius: 4px 0;
        background: #ffffff;
    }

    @-webkit-keyframes slide-top {
    0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    }
    @keyframes slide-top {
    0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    }
`