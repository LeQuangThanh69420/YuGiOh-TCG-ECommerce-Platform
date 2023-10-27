import './Login.css'
import Input from './Input/Input'

function Login() {
    return (
        <div className="login-container">
            <div className='main-form'>
                <p className='title-login'>
                    Login
                </p>
                <Input label={"Email or Account name"} type="email" regex={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} />
                <div className='password-container'>
                    <Input label={"Password"} type={"password"} regex={/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/} />
                    <a>
                        Forgot Password?
                    </a>
                </div>
                <button className='login-button'>
                    Login
                </button>
                <div className='create-account'>
                    <p>
                        Don't have an account? <a href="">Create one now</a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Login