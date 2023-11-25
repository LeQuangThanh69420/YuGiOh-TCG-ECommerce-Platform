import './../../../styles/SignUp.css'
import './../../../styles/IconDefine.css'
import LogoDuRiu from '../../Shared/LogoDuRiu';
import Input from "../../Shared/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AppData } from '../../../Root';

function SignUp() {

    const navigate = useNavigate();

    const { showToast, setType, setMessage } = useContext(AppData)

    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const frontRef = useRef();
    const backRef = useRef();

    const handleSubmit = () => {
        let status;

        console.log(email, userName, password, repeatPassword);
        if (password === repeatPassword) {
            fetch(import.meta.env.VITE_API_URL + "/User/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userName,
                    password: password,
                    email: email,
                }),
            })
                .then((response) => {
                    status = response.status;
                    return response.json();
                })
                .then((data) => {
                    if (status === 200) {
                        showToast();
                        setType('toast-success');
                        setMessage('Sign up successfully, please check your email!')
                        handleNavigateLogin();
                    } else {
                        showToast();
                        setType('toast-error');
                        setMessage(data.message)
                    }
                })
        }
    };

    useEffect(() => {
        frontRef.current.style.transform = 'rotateY(180deg)';
        backRef.current.style.transform = 'rotateY(0deg)';

        setTimeout(() => {
            frontRef.current.style.transform = 'rotateY(360deg)';
            backRef.current.style.transform = 'rotateY(180deg)';
        }, 200);

    }, [])

    const handleNavigateLogin = () => {
        frontRef.current.style.transform = 'rotateY(180deg)';
        backRef.current.style.transform = 'rotateY(0deg)';
        setTimeout(() => {
            navigate('/login')
        }, 500);
    }

    return (
        <div className="login-screen">
            <div className="go-home">
                <LogoDuRiu logoColor={"#7400CC"} logoNameColor={"#7400CC"} />
            </div>
            <div className="login-container">
                <div className="bg-img"></div>
                <div className="main-form xl">
                    <div className="front-card xl absolute sign-up-card" ref={frontRef} style={{ transition: 'transform 0.5s linear' }}>
                        <p className="title-login">Sign Up</p>
                        <div className="sign-up-inputs">
                            <Input
                                label={"Email"}
                                type="email"
                                regex={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                                icon={"mail"}
                                errorMessage="Email must have this format: 'abc@xyz.ijk'"
                                setData={setEmail}
                            />
                            <Input
                                label={"Username"}
                                type="text"
                                regex={/^.{8,16}$/}
                                icon={"person"}
                                errorMessage="Username must be 8-16 characters!"
                                setData={setUserName}
                            />
                            <div className="password-container">
                                <Input
                                    label={"Password"}
                                    type={"password"}
                                    regex={/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,16}$/}
                                    icon="lock"
                                    errorMessage={
                                        "Password must have 1 number, 1 uppercase, 1 special character and has 8-16 characters"
                                    }
                                    setData={setPassword}
                                />
                            </div>
                            <div className="password-container">
                                <Input
                                    label={"Repeat password"}
                                    type={"password"}
                                    icon="key"
                                    regex={password}
                                    errorMessage={
                                        "Make sure to repeat password correctly!"
                                    }
                                    setData={setRepeatPassword}
                                />
                            </div>
                            <div className="login-button-container">
                                <button className="login-button" onClick={handleSubmit}>
                                    Submit
                                </button>
                                <div className="create-account">
                                    Already have an account? <span className="links" onClick={handleNavigateLogin}>Login now</span>
                                </div>
                            </div>
                        </div>
                        <div className="login-desc">
                        </div>
                    </div>
                    <div className="back-card xl absolute" ref={backRef} style={{ transition: 'transform 0.5s linear' }}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp