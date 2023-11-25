/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Link } from "react-router-dom";

import LogoDuRiu from "./LogoDuRiu";
import { AppData } from "../../Root";

import "./../../styles/Header.css";
import './../../styles/IconDefine.css';

function Header() {

    const { currentRoute, userData } = useContext(AppData);

    return (
        <div className="main-container">
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
                {!userData ?
                    <Link to={'/login'}>
                        <button className="users-button">
                            Login
                        </button>
                    </Link>
                    : <img src={userData.avatarURL} alt="" className="header-user-avt" />
                }
            </div>
        </div>
    );
}

export default Header;
