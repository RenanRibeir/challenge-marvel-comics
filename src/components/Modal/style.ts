import styled from 'styled-components';

export const StyledModal = styled.div`
    top: 0;
    left: 0;
    z-index: 10;
    position: absolute;
    display: flex;
    justify-content: center;
    position: fixed; 
    top: 0;
    left: 0;
    align-items: center;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    width: 100%;
`

export const Container = styled.div`
    background-color: #fff;
    color: #000;
    height: 60%;
    width: 30%;
`
export const Button = styled.button`
    background-color: white;
    border: 2px solid #000;
    width: 100px;
    height: 30px;
`
export const Content = styled.div`
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 90px;      /* fallback */
   -webkit-line-clamp: 4; /* number of lines to show */
   -webkit-box-orient: vertical;
   margin: 10px;
`
export const Title = styled.div`
    font-weight: bold;
    margin: 10px;
`
export const Img = styled.img`
    height: 60%;
`