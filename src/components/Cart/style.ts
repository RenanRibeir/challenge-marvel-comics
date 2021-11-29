import styled from 'styled-components';

export const StyledModal = styled.div`
    display: flex;
    position: fixed; 
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    height: 100%;
    width: 100%;
`

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    color: #000;
    overflow: scroll;
`
export const Button = styled.button`
    background-color: white;
    border: 2px solid #000;
    width: 100px;
    height: 30px;
`

export const ButtonSend = styled.button`
    background-color: white;
    border: 2px solid #000;
    width: 40%;
    height: 30px;
`

export const ButtonC = styled.button`
    background-color: white;
    border: 0px;
    width: 30px;
    height: 30px;
`
export const Title = styled.div`
    font-weight: bold;
    margin: 14px;
`
export const Name = styled.div`
    font-weight: bold;
    margin: 10px;
`

export const Img = styled.img`
    width: 40px;
`
