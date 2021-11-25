import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #000;
    min-width: 300px;
    width: 50%;
    height: 10%;
    margin-bottom: 20px;
`

export const Img = styled.img`
    width: 50%;
    height: 50px;
    object-fit: cover;
`
export const Name = styled.span`
    text-align: end;
    max-width: 100px;
    margin-right: 2%;
`