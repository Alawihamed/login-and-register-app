import Cookies from 'js-cookie';
import { useNavigate,Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  BgHomePage,
  BgHomeCard,
  HomeTitle,
  LogoutButton
} from "./styledComponent";

function Home() {
  const navigate = useNavigate();
  const nameOfUser = Cookies.get('user');
  const token = Cookies.get('token');
  if(token === undefined){
    return <Navigate to="/login"/>
  }
  const logoutFunction = async ()=>{
    await axios.post('http://127.0.0.1:8000/api/auth/logout',{token:token})
    .then((res)=>{
      toast.success(res?.data?.message,{autoClose: 2500});
      Cookies.remove('user');
      Cookies.remove('token');
      navigate("/login");
    }).catch((error)=>{
      console.log(error.message);
    });
  }

    return (
      <BgHomePage>
      <BgHomeCard>
      <HomeTitle>Welcome {nameOfUser}</HomeTitle>
      <LogoutButton type='button' onClick={logoutFunction}>Logout</LogoutButton>
      </BgHomeCard>
      </BgHomePage>
    );
  }
  
  export default Home;
  