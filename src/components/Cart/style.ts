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
    justify-content: start;
    align-items: center;
    border: 2px solid black;
    flex-direction: column;
    color: #000;
    width: 400px;
    height: 400px;
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
    width: 405px;
    height: 30px;
    margin-top: 10px;
`

export const ButtonC = styled.button`
    background-color: white;
    border: 0px;
    width: 54px;
    height: 54px;
    font-size: 18px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    top: 10px;
    background: rgb(255,255,255);
    border: 2px solid black;
`
export const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    height: 50px;
    text-align: center;
    width: 330px;
    top:10px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  `
        
export const Name = styled.div`
    font-weight: bold;
    text-align: start;
    margin: 10px;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 70px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
`

export const Img = styled.img`
    width: 80px;
    height: min-content;
`
