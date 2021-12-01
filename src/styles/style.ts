import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    background-color: white;
    font-weight: bold;
    border: black solid 2px;
    width: 35%;
    height: 34px;
`
export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 875px;
`

export const Input = styled.input`
    width: 400px;
    min-width: 300px;
    height: 30px;
    font-size: 16px;
    border: 2px solid black;
    text-align: center;
`