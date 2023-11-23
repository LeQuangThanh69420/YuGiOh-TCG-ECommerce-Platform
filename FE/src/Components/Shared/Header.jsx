/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Link } from "react-router-dom";

import LogoDuRiu from "./LogoDuRiu";
import { AppData } from "../../Root";

import "./../../styles/Header.css";
import './../../styles/IconDefine.css';

function Header({ userData }) {

    const { currentRoute, setCurrentRoute } = useContext(AppData);

    return (
        <div className="main-container">
            <div className="header-bar">
                <LogoDuRiu logoColor={'#000'} logoNameColor={'#7400CC'} />
                <div className="header-nav-icons">
                    <Link to={'/'} onClick={() => setCurrentRoute('/')}>
                        <div className={`icon-2 ${currentRoute === '/' ? 'home-purple' : 'home-gray'}`}>
                        </div>
                    </Link>
                    <Link to={'/cards'} onClick={() => setCurrentRoute('/cards')}>
                        <div className={`icon-2 ${currentRoute === '/cards' ? 'card-purple' : 'card-gray'}`}></div>
                    </Link>
                    <Link to={'/gacha'} onClick={() => setCurrentRoute('/gacha')}>
                        <div className={`icon-2 ${currentRoute === 'gacha' ? 'gacha-purple' : 'gacha-gray'}`}></div>
                    </Link>
                    <Link to={'/buy-riu-coin'} onClick={() => setCurrentRoute('/buy-riu-coin')}>
                        <div className={`icon-2 ${currentRoute === '/buy-riu-coin' ? 'coin-purple' : 'coin-gray'}`}></div>
                    </Link>
                </div>
                <div className="users-button">
                    {!userData && <Link to={"/login"} >Login</Link>}
                    {userData &&
                        <img src={userData.avatarURL} alt="" className="header-user-avt" />
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
