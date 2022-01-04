import styled from 'styled-components';

export const BgHomePage = styled.div`
width: 100%;
background-color: #e8e8e8;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const BgHomeCard = styled.div`
width: 40%;
height: 200px;
background-color: #fff;
box-shadow: 5px 2px 10px 0px #bebebe;
padding: 50px 20px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width:992px){
    width: 80%;
    height: auto;
}
`
export const HomeTitle = styled.h3`
font-size: 1.8rem;
font-weight: bold;
color: #000;
margin-top: 0px;
margin-bottom: 20px;
@media (max-width:992px){
    text-align: center;
}
`
export const LogoutButton = styled.button`
background-color: #706efc;
color: #fff;
font-size: 18px;
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
`