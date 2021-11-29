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
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 70px;      /* fallback */
   -webkit-line-clamp: 5; /* number of lines to show */
   -webkit-box-orient: vertical;
`
export const Title = styled.div`
    font-weight: bold;
`
export const Img = styled.img`
    height: 60%;
`