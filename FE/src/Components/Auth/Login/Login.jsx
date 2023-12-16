import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkSession } from "../../../utils/checkSession";
import { forgetPassword, logIn } from "../../../api/apiUser";
import INPUT_FORGET_PASSWORD from "../../../constants/inputsForgetPassword";

import Input from "../../Shared/Input/Input";
import LogoDuRiu from "../../Shared/LogoDuRiu";
import FormModal from "../../Shared/FormModal";
import { AppData } from "../../../Root";

import "./../../../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const { showToast, setMessage, setType, setUserData } = useContext(AppData);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modalFormValues, setModalFormValues] = useState({
    recoveryUsername: "",
    recoveryEmail: "",
  });
  const [showModalInput, setShowModalInput] = useState("");

  const frontRef = useRef();
  const backRef = useRef();

  const handleSubmit = async () => {
    const response = await logIn(userName, password);
    response.json().then(data => {
      if (response.status === 200) {
        localStorage.setItem('userData', JSON.stringify(data));
        setUserData(data);
        setType('toast-success');
        setMessage('Login successfully!')
        showToast();
        navigate('/')
      } else {
        setType('toast-error');
        setMessage(data.message);
        showToast();
      }
    })
  };

  const handleNavigateSignUp = () => {
    frontRef.current.style.transform = "rotateY(180deg)";
    backRef.current.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      navigate("/sign-up");
    }, 500);
  };

  const handleSubmitForget = async () => {
    const response = await forgetPassword(modalFormValues.recoveryUsername, modalFormValues.recoveryEmail);
    response.json().then((data) => {
      if (response.status === 200) {
        setShowModalInput(false);
        setType("toast-success");
        setMessage(data.message);
        showToast();
      } else {
        setType("toast-error");
        setMessage(data.message);
        showToast();
      }
    });
  };

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
                  onSubmit={handleSubmit}
                />
                <div className="password-container">
                  <Input
                    label={"Password"}
                    type={"password"}
                    regex={/^(?!\s*$).+/}
                    icon="lock"
                    errorMessage={"Password can not be empty!"}
                    setData={setPassword}
                    onSubmit={handleSubmit}
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
      <FormModal
        title={<>Fill up this <span className="text-primary">Form</span> to get your <span className="text-primary">Password</span> back</>}
        isDisplay={showModalInput}
        setIsDisplay={setShowModalInput}
        inputs={INPUT_FORGET_PASSWORD}
        onSubmit={handleSubmitForget}
        renderInput={(item) => (
          <Input
            type={item.type}
            icon={item.icon_class_name}
            label={item.label}
            regex={item.regex}
            errorMessage={item.error_message}
            setData={(inputValue) => {
              setModalFormValues(prev => ({
                ...prev,
                [item.data_key]: inputValue,
              }))
            }}
            key={item.id}
          />
        )}
      />
    </>
  );
}

export default Login;
