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

    img {
        transition: all .3s;
        cursor: pointer;

        &:hover {
            transform: scale(1.03);
        }
    }
`