import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    border: 2px solid #000;
    min-width: 300px;
    width: 50%;
    height: 200px;
    margin-bottom: 20px;
`
export const Column = styled.div`
    flex-direction: column;
    max-width: 55%;
    margin: 20px;
`
export const Img = styled.img`
    width: 40%;
    height: 100%;
    object-fit: cover;
`
export const Name = styled.span`
    text-align: start;
    max-width: 100px;
    margin:10px;
    font-weight: bold;
`

export const Desc = styled.span`
    text-align: center;
    margin: 10px;
`