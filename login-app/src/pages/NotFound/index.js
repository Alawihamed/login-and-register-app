import { Link } from "react-router-dom";
import {
    BgHomePage,
    Img,
    NotFoundTitle,
    NotFoundDesc
  } from "./styledComponent";
import Image from "../../assets/notFound.png";
  
  function NotFound() {
      return (
        <BgHomePage>
        <Img src={Image} alt="Not-Found" />
        <NotFoundTitle>Page Not Found</NotFoundTitle>
        <NotFoundDesc>The page your looking for doesn't exist . Go To<Link to="/login">Login</Link></NotFoundDesc>
        </BgHomePage>
      );
    }
    
    export default NotFound;
    