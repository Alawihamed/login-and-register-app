import styled from 'styled-components';

export const InputGroupContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
`
export const InputLabel = styled.label`
margin-bottom: 10px;
font-size: 16px;
font-weight: 600;
color: #aaa;
`
export const Input = styled.input`
background-color: #eee;
color: #000;
font-size: 0.9rem;
padding: 10px;
border-radius: 10px;
border: none;
outline: none;
`
export const Error = styled.p`
font-size: 14px;
color: red;
margin-top: 5px;
margin-bottom: 0px;
`