import styled from 'styled-components';

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
        background-color: rgba(0, 0, 0, 0.85);
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        padding: 8px 12px;
        border-radius: 8px;
        color: white;
        text-align: center;
        z-index: 1;
        transition: all .3s;
    }

    &:after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        border: solid;
        border-color: rgba(0, 0, 0, 0.85) transparent;
        border-width: 0 6px 6px 6px;
        opacity: 0;
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
        border-radius: 50%;
        transition: all .1s;
    }

    &:hover {
        &:before, &:after, & svg {
            opacity: 1;
        }

        img {
            transform: scale(1.03);
        }
    }

    
`