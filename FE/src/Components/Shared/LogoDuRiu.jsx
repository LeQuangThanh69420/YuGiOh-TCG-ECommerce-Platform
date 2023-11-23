import { useContext } from "react";

import { Link } from "react-router-dom";
import { AppData } from "../../Root";

import logoImg from './../../asset/logoDuRiuImg.png'

import "./../../styles/LogoDuRiu.css";

function LogoDuRiu({ logoColor, logoNameColor }) {

  const { setCurrentRoute } = useContext(AppData)

  return (
    <Link className="logo-container" to={'/'} onClick={() => setCurrentRoute('/')}>
      <img src={logoImg} alt="" className="logo-img" />
      <p className="duriu-logo-name" style={{ color: logoNameColor }}>
        DuRiu Studio
      </p>
    </Link>
  );
}

export default LogoDuRiu;
