import styled,{keyframes} from 'styled-components';

export const Tittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
`

const blink = keyframes`
    0% {
        opacity: 0;
    }
    49% {
        opacity: 0.25;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const Img = styled.img`
    margin-top: 30px;

    height: 100px;
  
    animation: ${blink} 1s;
    animation-iteration-count: infinite;
`