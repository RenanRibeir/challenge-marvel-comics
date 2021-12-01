import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Button = styled.button`
    background-color: white;
    font-weight: bold;
    border: black solid 2px;
    width: 35%;
    margin: 10px;
    margin-top: 0px;
    height: 30px;
`
export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const Input = styled.input`
    width: 300px;
    min-width: 300px;
    height: 30px;
    font-size: 16px;
    border: 2px solid black;
    text-align: center;
    margin-right: 30px;
`