import './../../styles/SignUp.css'
import LogoDuRiu from "../Shared/LogoDuRiu";
import Input from "./../Shared/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function SignUp() {

    const navigate = useNavigate();

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
                if (status === 200) {
                    localStorage.setItem('userData', JSON.stringify(data));
                    navigate('/');
                } else {
                    console.log(data.message);
                }
            })

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
        
    }

    return (
        <div className="login-screen">
            <div className="go-home">
                <LogoDuRiu logoColor={"#1988ff"} logoNameColor={"#1988ff"} />
            </div>
            <div className="login-container">
                <div className="bg-img"></div>
                <div className="main-form xl">
                    <div className="front-card xl absolute" ref={frontRef} style={{ transition: 'transform 0.5s linear' }}>
                        <p className="title-login">Sign Up</p>
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
                        <button className="login-button">
                            Sign Up
                        </button>
                        <div className="create-account">
                            <p>
                                Already have an account? <span className="links" onClick={handleNavigateLogin}>Login now</span>
                            </p>
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