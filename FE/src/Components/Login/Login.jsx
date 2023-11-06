import "./../../styles/Login.css";
import Input from "./Input/Input";
import LogoDuRiu from "../Shared/LogoDuRiu";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-screen">
      <div className="go-home">
        <LogoDuRiu logoColor={"#00336e"} logoNameColor={"#00336e"}/>
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
          />
          <div className="password-container">
            <Input
              label={"Password"}
              type={"password"}
              regex={/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/}
              errorMessage={
                "Password must has at least 8 characters, 1 number, 1 uppercase and 1 special character!"
              }
            />
            <p className="links">Forgot Password?</p>
          </div>
          <button className="login-button">Login</button>
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
