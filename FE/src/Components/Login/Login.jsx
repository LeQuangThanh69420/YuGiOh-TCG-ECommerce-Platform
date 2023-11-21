import "./../../styles/Login.css";
import Input from "../Shared/Input/Input";
import LogoDuRiu from "../Shared/LogoDuRiu";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { AppData } from "../../Root";

function Login() {
  const navigate = useNavigate();

  const {showToast, setMessage, setType} = useContext(AppData);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const frontRef = useRef();
  const backRef = useRef();

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
        showToast();
        if (status === 200) {
          localStorage.setItem('userData', JSON.stringify(data));
          setMessage('Login Successfully!');
          setType('toast-success');
          navigate('/');
        } else {
          setMessage(data.message)
          setType('toast-error')
        }
      })

  };

  useEffect(() => {
    frontRef.current.style.transform = 'rotateY(180deg)';
    backRef.current.style.transform = 'rotateY(0deg)';

    setTimeout(() => {
      frontRef.current.style.transform = 'rotateY(0deg)';
      backRef.current.style.transform = 'rotateY(-180deg)';
    }, 200);
  }, [])

  const handleNavigateSignUp = () => {
    frontRef.current.style.transform = 'rotateY(180deg)';
    backRef.current.style.transform = 'rotateY(0deg)';
    setTimeout(() => {
      navigate('/sign-up')
    }, 500)
  }

  return (
    <div className="login-screen">
      <div className="go-home">
        <LogoDuRiu logoColor={"#45B2FF"} logoNameColor={"#45B2FF"} />
      </div>
      <div className="login-container">
        <div className="bg-img"></div>
        <div className="main-form xl">
          <div className="front-card xl absolute login-card" ref={frontRef} style={{ transition: 'transform 0.5s linear' }}>
            <p className="title-login">Login</p>
            <div className="login-inputs">
              <Input
                label={"Username"}
                type="email"
                regex={/^(?!\s*$).+/}
                icon={"person"}
                errorMessage="Username can not be empty!"
                setData={setUserName}
              />
              <div className="password-container">
                <Input
                  label={"Password"}
                  type={"password"}
                  regex={/^(?!\s*$).+/}
                  icon="lock"
                  errorMessage={
                    "Password can not be empty!"
                  }
                  setData={setPassword}
                />
                <p className="links">Forgot Password?</p>
              </div>
            </div>
            <div className="login-button-container">
              <button className="login-button" onClick={handleSubmit}>
                Login
              </button>
              <div className="create-account">
                Don't have an account? <span className="links" onClick={handleNavigateSignUp}>Create one now</span>
              </div>
            </div>
          </div>
          <div className="back-card xl absolute" ref={backRef} style={{ transition: 'transform 0.5s linear' }}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
