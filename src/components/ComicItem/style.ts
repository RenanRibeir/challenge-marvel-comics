import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 60px;
    width: 200px;
    height: 380px;
    margin-right: 20px;
    margin-bottom: 20px;
    flex-direction: column;
    border: 2px solid black;
`

export const Img = styled.img`
    width: 200px;
    height: 320px;
`
export const Name = styled.span`
    width: 200px;
    text-align: center;
    align-items: flex-end;
`
export const Button = styled.button`
    background-color: white;
    font-weight: bold;
    border: 0px;
    width: 100%;
    height: 30px;
`
