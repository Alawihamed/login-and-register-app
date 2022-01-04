import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  BgRegisterPage,
  BgRegisterCard,
  RegisterTitle,
  RegisterPar,
  RegisterForm,
  RegisterImg,
  RegisterButton,
} from "./styledComponent";
import Image from "../../assets/register.png";
import InputGroup from "../../components/InputGroup";

function Register() {
  let navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfPassword] = useState("");
  const [errors , setErrors] = useState({});

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/auth/register", {
        name,
        email,
        password,
        password_confirmation,
      })
      .then((response) => {
        toast.success(response.data.message,{autoClose: 2500});
        setname("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        navigate("/login");
      }).catch((errors) => {
        setErrors(JSON.parse(errors.response.data));
      });
  };

  return (
    <BgRegisterPage>
      <BgRegisterCard>
        <RegisterImg src={Image} alt="Register" />
        <RegisterForm onSubmit={submitRegisterForm}>
          <RegisterTitle>Welcome To Register Page</RegisterTitle>
          <InputGroup
            label="Full Name"
            type="text"
            placeholder="Full Name"
            value={name}
            setValue={setname}
            error={errors.name}
          />
          
          <InputGroup
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
            error={errors.email}
          />
          <InputGroup
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
            error={errors.password}
          />
          <InputGroup
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            value={password_confirmation}
            setValue={setConfPassword}
          />
          <RegisterButton type="submit">Register</RegisterButton>
          <RegisterPar>Already Have Account <Link to="/login">Sing In</Link></RegisterPar>
        </RegisterForm>
      </BgRegisterCard>
    </BgRegisterPage>
  );
}

export default Register;
