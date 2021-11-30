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
    color: #000;
    width: 300px;
    overflow: scroll;
    #{Container}::-webkit-scrollbar { 
    display: none; 
}
`
export const Button = styled.button`
    background-color: white;
    border: 2px solid #000;
    width: 100px;
    height: 30px;
    margin: 10px;
`

export const ButtonSend = styled.button`
    background-color: white;
    border: 2px solid #000;
    width: 300px;
    height: 30px;
`

export const ButtonC = styled.button`
    background-color: white;
    border: 0px;
    width: 30px;
    height: 30px;
    font-size: 18px;
`
export const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`
export const Name = styled.div`
    font-weight: bold;
    text-align: start;
    margin: 10px;
`

export const Img = styled.img`
    width: 80px;
`
