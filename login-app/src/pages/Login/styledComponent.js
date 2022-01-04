import styled from 'styled-components';

export const BgLoginPage = styled.div`
width: 100%;
background-color: #e8e8e8;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const BgLoginCard = styled.div`
width: 60%;
height: 400px;
background-color: #fff;
box-shadow: 5px 2px 10px 0px #bebebe;
padding: 50px 20px;
border-radius: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media (max-width:992px){
    width: 80%;
    height: auto;
    flex-direction: column;
}
`
export const LoginTitle = styled.h3`
font-size: 1.8rem;
font-weight: bold;
color: #000;
margin-top: 0px;
margin-bottom: 20px;
@media (max-width:992px){
    text-align: center;
}
`
export const LoginPar = styled.p`
font-size: 16px;
 & a{
  text-decoration:none;
  font-weight:bold;
  margin-left: 5px;
 }
`

export const LoginForm = styled.form`
width: 50%;
padding: 20px;
display: flex;
flex-direction: column;
@media (max-width:992px){
    width: 100%;
}
`
export const LoginImg = styled.img`
width: 50%;
@media (max-width:992px){
    order: -1;
    width: 100%;
}
@media (max-width:576px){
    display: none;
}
`
export const LoginButton = styled.button`
width: 30%;
background-color: #706efc;
color: #fff;
font-size: 16px;
font-weight: 100;
padding: 5px 20px;
border: none;
outline: none;
border-radius: 10px;
cursor: pointer;
transition: all 0.5s;
 &:hover{
    background-color: #0200a0;
    transform: translateY(1px);
 }
 &:disabled{
    background-color: #dddd;
 }
`