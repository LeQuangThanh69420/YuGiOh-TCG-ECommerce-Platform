import { useContext } from "react";

import { Link } from "react-router-dom";
import { AppData } from "../../Root";
import logoImg from './../../asset/logoDuRiuImg2.png'
import "./../../styles/LogoDuRiu.css";

function LogoDuRiu({ logoNameColor }) {
  
  return (
    <Link className="logo-container" to={'/'}>
      <img src={logoImg} alt="" className="logo-img" />
      <p className="duriu-logo-name" style={{ color: logoNameColor }}>
        DuRiu Studio
      </p>
    </Link>
  );
}

export default LogoDuRiu;
