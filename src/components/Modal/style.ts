import styled from 'styled-components';

export const StyledModal = styled.div`
    top: 0;
    left: 0;
    z-index: 10;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
`
export const Container = styled.div`
    background-color: #fff;
    color: #000;
    height: 60%;
    width: 30%;
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    flex-direction: row;
`
export const Img = styled.img`
    height: 60%;
`