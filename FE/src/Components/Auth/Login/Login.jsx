import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkSession } from "../../../utils/checkSession";

import { forgetPassword } from "../../../api/apiUser";

import Input from "../../Shared/Input/Input";
import LogoDuRiu from "../../Shared/LogoDuRiu";
import { AppData } from "../../../Root";

import "./../../../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const { showToast, setMessage, setType, setUserData } = useContext(AppData);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [recoveryUsername, setRecoveryUsername] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [showModalInput, setShowModalInput] = useState("");

  const frontRef = useRef();
  const backRef = useRef();

  const handleSubmit = () => {
    let status;

    fetch(import.meta.env.VITE_API_URL + "/User/Login", {
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
          localStorage.setItem("userData", JSON.stringify(data));
          setMessage("Login Successfully!");
          setType("toast-success");
          setUserData(data);
          navigate("/");
        } else {
          setMessage(data.message);
          setType("toast-error");
        }
      });
  };

  const handleNavigateSignUp = () => {
    frontRef.current.style.transform = "rotateY(180deg)";
    backRef.current.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      navigate("/sign-up");
    }, 500);
  };

  const handleSubmitForget = async () => {
    const response = await forgetPassword(recoveryUsername, recoveryEmail);
    response.json().then(data => {
      if(response.status === 200) {
        setShowModalInput(false)
        setType('toast-success');
        setMessage(data.message);
        showToast();
      } else {
        setType('toast-error');
        setMessage(data.message); 
        showToast();
      }
    })
  }

  useEffect(() => {
    if (checkSession()) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    frontRef.current.style.transform = "rotateY(180deg)";
    backRef.current.style.transform = "rotateY(0deg)";

    setTimeout(() => {
      frontRef.current.style.transform = "rotateY(0deg)";
      backRef.current.style.transform = "rotateY(-180deg)";
    }, 200);
  }, []);

  return (
    <>
      <div className="login-screen">
        <div className="go-home">
          <LogoDuRiu logoColor={"#7400CC"} logoNameColor={"#7400CC"} />
        </div>
        <div className="login-container">
          <div className="bg-img"></div>
          <div className="main-form xl">
            <div
              className="front-card xl absolute login-card"
              ref={frontRef}
              style={{ transition: "transform 0.5s linear" }}
            >
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
                    errorMessage={"Password can not be empty!"}
                    setData={setPassword}
                  />
                  <p className="links" onClick={() => setShowModalInput(true)}>
                    Forgot Password?
                  </p>
                </div>
              </div>
              <div className="login-button-container">
                <button className="login-button" onClick={handleSubmit}>
                  Login
                </button>
                <div className="create-account">
                  Don't have an account?{" "}
                  <span className="links" onClick={handleNavigateSignUp}>
                    Create one now
                  </span>
                </div>
              </div>
            </div>
            <div
              className="back-card xl absolute"
              ref={backRef}
              style={{ transition: "transform 0.5s linear" }}
            ></div>
          </div>
        </div>
      </div>
      {showModalInput && (
        <div className="forgot-password-screen" onClick={() => setShowModalInput(false)}>
          <div className="forgot-password-container" onClick={(event) => { event.stopPropagation() }}>
            <p className="forgot-password-title">Enter your <span className="text-primary">Email</span> to get <span className="text-primary">Password</span> back</p>
            <div className="recovery-email-container">
              <div className="recovery-inputs">
                <Input
                  type={'text'}
                  label={'Enter your username'}
                  icon={'person'}
                  regex={/^.{8,16}$/}
                  errorMessage={'Username must be 8-16 characters!'}
                  setData={setRecoveryUsername}
                />
                <Input
                  type="email"
                  label={"Email for password recovery"}
                  icon={"mail"}
                  regex={
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  }
                  errorMessage="Email must have this format: 'abc@xyz.ijk'"
                  setData={setRecoveryEmail}
                />
              </div>
              <div className="forget-password-buttons">
                <button className="button-2" onClick={() => setShowModalInput(false)}>Cancel</button>
                <button onClick={handleSubmitForget}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
