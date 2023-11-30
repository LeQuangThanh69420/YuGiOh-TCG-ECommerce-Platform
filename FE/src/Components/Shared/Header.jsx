/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { logOut } from "../../api/apiUser";

import LogoDuRiu from "./LogoDuRiu";
import { AppData } from "../../Root";

import "./../../styles/Header.css";
import './../../styles/IconDefine.css';

function Header() {

    const navigate = useNavigate();

    const { currentRoute, userData, setUserData, showToast, setType, setMessage } = useContext(AppData);

    const [isOpenInfo, setIsOpenInfo] = useState(false);

    const handleClickAvatar = () => {
        setIsOpenInfo(!isOpenInfo);
    }

    const handleLogOut = () => {
        setIsOpenInfo(false);
        logOut(() => setUserData({}));
        navigate('/login');
        setType('toast-success');
        setMessage('Log out successfully!')
        showToast();
    }

    return (
        <div className="header-main-container">
            <div className="header-bar">
                <LogoDuRiu logoColor={'#000'} logoNameColor={'#7400CC'} />
                <div className="header-nav-icons">
                    <Link to={'/'}>
                        <div className={`icon-2 ${currentRoute === '/' ? 'home-purple' : 'home-gray'}`}>
                        </div>
                    </Link>
                    <Link to={'/cards'}>
                        <div className={`icon-2 ${currentRoute === '/cards' ? 'card-purple' : 'card-gray'}`}></div>
                    </Link>
                    <Link to={'/gacha'} >
                        <div className={`icon-2 ${currentRoute === '/gacha' ? 'gacha-purple' : 'gacha-gray'}`}></div>
                    </Link>
                    <Link to={'/buy-riu-coin'}>
                        <div className={`icon-2 ${currentRoute === '/buy-riu-coin' ? 'coin-purple' : 'coin-gray'}`}></div>
                    </Link>
                </div>
                {!userData.username ?
                    <Link to={'/login'}>
                        <button className="users-button">
                            Login
                        </button>
                    </Link>
                    : <img src={userData.avatarURL} className="header-user-avt" onClick={handleClickAvatar} />
                }
                {isOpenInfo && <div className="header-user-option">
                    <div className="header-user-info">
                        <div className="user-info-child">
                            <img src={userData.avatarURL} className="header-user-avt-display" />
                            <p className="user-name text-secondary">{userData.username}</p>
                        </div>
                        <div className="user-money">
                            <span>{userData.money}</span>
                            <div className="riu-coin-icon icon-3"></div>
                        </div>
                    </div>
                    <div className="option-line"></div>
                    <div className="header-option-buttons">
                        <Link to={'/user'} onClick={() => setIsOpenInfo(false)}>
                            <div className="header-option-button">
                                <span className="info-text text-secondary">Your Profile</span>
                                <div className="info-icon icon-3"></div>
                            </div>
                        </Link>
                        <div className="header-option-button" onClick={handleLogOut}>
                            <span className="logout-text">Log Out</span>
                            <div className="log-out icon-3"></div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>

    );
}

export default Header;
