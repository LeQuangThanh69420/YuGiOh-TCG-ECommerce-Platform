import "./../../styles/Login.css";
import Input from "./Input/Input";
import LogoDuRiu from "../Shared/LogoDuRiu";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    let status;

    fetch("http://localhost:5233/api/User/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((data) => {
        if(status === 200) {
          localStorage.setItem('userData', JSON.stringify(data));
          navigate('/');
        } else {
          //toast fires here
          console.log(data.message);
        }
      })

  };

  const handleFlip = () => {
    
  }

  return (
    <div className="login-screen">
      <div className="go-home">
        <LogoDuRiu logoColor={"#00336e"} logoNameColor={"#00336e"} />
      </div>
      <div className="login-container">
        <div className="bg-img"></div>
        <div className="main-form" onClick={handleFlip}>
          <p className="title-login">Login</p>
          <Input
            label={"Username"}
            type="email"
            regex={/^(?!\s*$).+/}
            errorMessage="Username can not be empty!"
            setData={setUserName}
          />
          <div className="password-container">
            <Input
              label={"Password"}
              type={"password"}
              regex={/^(?!\s*$).+/}
              errorMessage={
                "Password can not be empty!"
              }
              setData={setPassword}
            />
            <p className="links">Forgot Password?</p>
          </div>
          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>
          <div className="create-account">
            <p>
              Don't have an account? <Link to={'/sign-up'}>Create one now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
