import { useState } from "react";
import { Link, useNavigate,Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import { toast } from "react-toastify";
import {
  BgLoginPage,
  BgLoginCard,
  LoginTitle,
  LoginPar,
  LoginForm,
  LoginImg,
  LoginButton,
} from "./styledComponent";
import Image from "../../assets/login.png";
import InputGroup from "../../components/InputGroup";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const token = Cookies.get("token");
  if(token !== undefined){
    return <Navigate to="/"/>
  }
  const submitLoginForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        toast.success(response?.data?.message,{autoClose: 2500});
        Cookies.set('token',response?.data?.access_token,{expires:1});
        Cookies.set('user',response?.data?.user,{expires:1});
        setEmail("");
        setPassword("");
        setErrors("");
        navigate("/");
      })
      .catch((errors) => {
        setErrors(errors.response.data);
      });
  };
  return (
    
    <BgLoginPage>
      <BgLoginCard>
        <LoginForm onSubmit={submitLoginForm}>
          <LoginTitle>Welcome Back</LoginTitle>
          <InputGroup
            label="Email"
            type="email"
            placeholder="Your Email"
            value={email}
            setValue={setEmail}
            error={errors.email}
          />
          <InputGroup
            label="Password"
            type="password"
            placeholder="Your Password"
            value={password}
            setValue={setPassword}
            error={errors.password||errors.error}
          />
          <LoginButton type="submit" disabled={email.length < 5 || password.length < 5}>Login</LoginButton>
          <LoginPar>
            New Here?<Link to="/register">Sing Up</Link>
          </LoginPar>
        </LoginForm>
        <LoginImg src={Image} alt="login" />
      </BgLoginCard>
    </BgLoginPage>
  );
}

export default Login;
