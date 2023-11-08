import "./../../styles/Login.css";
import Input from "./Input/Input";
import LogoDuRiu from "../Shared/LogoDuRiu";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(userName);
    console.log(password);
    console.log(
      JSON.stringify({
        username: userName,
        password: password,
      })
    );
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
        response.json();
      })
      .then((data) => console.log(data))
  };

  return (
    <div className="login-screen">
      <div className="go-home">
        <LogoDuRiu logoColor={"#00336e"} logoNameColor={"#00336e"} />
      </div>
      <div className="login-container">
        <div className="bg-img"></div>
        <div className="main-form">
          <p className="title-login">Login</p>
          <Input
            label={"Username"}
            type="email"
            regex={/^(?!\s*$).+/}
            errorMessage="Username can not be empty"
            setData={setUserName}
          />
          <div className="password-container">
            <Input
              label={"Password"}
              type={"password"}
              regex={/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/}
              errorMessage={
                "Password must has at least 8 characters, 1 number, 1 uppercase and 1 special character!"
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
              Don't have an account? <a href="">Create one now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
