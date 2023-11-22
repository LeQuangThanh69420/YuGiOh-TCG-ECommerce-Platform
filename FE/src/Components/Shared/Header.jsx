/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Link } from "react-router-dom";

import LogoDuRiu from "./LogoDuRiu";
import { AppData } from "../../Root";

import "./../../styles/Header.css";
import './../../styles/'

function Header({ userData }) {

    const {currentRoute, setCurrentRoute} = useContext(AppData);

    return (
        <div className="main-container">
            <div className="header-bar">
                <LogoDuRiu logoColor={'#000'} logoNameColor={'#7400CC'} />
                <div className="header-nav-icons">
                    <div className="home-grayy">

                    </div>
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
