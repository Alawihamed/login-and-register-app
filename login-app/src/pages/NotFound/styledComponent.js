import styled from 'styled-components';

export const BgHomePage = styled.div`
width: 100%;
background-color: #ffffff;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Img = styled.img`
width: 500px;
@media (max-width:992px){
    width: 300px;
}
`
export const NotFoundTitle = styled.h3`
font-size: 1.8rem;
text-align: center;
font-weight: bold;
color: #000;
margin-top: 0px;
margin-bottom: 20px;
`
export const NotFoundDesc = styled.p`
font-size: 1.2rem;
text-align: center;
line-height: 1.6;
color: #888888;
margin-top: 0px;
margin-bottom: 20px;
& a{
  text-decoration:none;
  font-weight:bold;
  margin-left: 5px;
}
`