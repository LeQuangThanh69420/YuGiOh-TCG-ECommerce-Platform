import { createContext, useEffect, useRef, useState } from "react";

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { getMoney } from "./api/apiUser";

import ToastMessages from "./Components/Shared/ToastMessage";
import Header from "./Components/Shared/Header";

export const AppData = createContext();

export default function Root() {

  const location = useLocation();

  const [isShow, setIsShow] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const [currentRoute, setCurrentRoute] = useState(location.pathname)

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : {});

  const timeOut1 = useRef();

  const showToast = () => {
    if (isShow) {
      clearTimeout(timeOut1.current);
      timeOut1.current = setIsShow(false);
      setTimeout(() => {
        setIsShow(true);
      }, 0);
    } else {
      setIsShow(true);
    }
  }

  useEffect(() => {
    setCurrentRoute(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    if (userData.username) {
      getMoney(userData.username).then(money => {
        setUserData(prev => ({
          ...prev,
          money: money
        }))
      })
    }
  }, [userData.username])

  return (
    <AppData.Provider value={{ showToast, setType, setMessage, currentRoute, setCurrentRoute, userData, setUserData }}>
      {!(currentRoute === '/login' || currentRoute === '/sign-up') && <Header />}
      <Outlet />
      <ToastMessages isDisplay={isShow} type={type} message={message} setIsDisplay={setIsShow} />
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-left-container">
            <div className="footer-col">
              <p className="footer-col-title">About features</p>
              <p className="footer-options">Sign In</p>
              <p className="footer-options">Sign Up</p>
              <p className="footer-options">Using headers</p>
              <p className="footer-options">Edit your profile</p>
              <p className="footer-options">Manage your deals</p>
              <p className="footer-options">Manage your cards</p>
              <p className="footer-options">Buying cards</p>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">About DuRiu</p>
              <p className="footer-options">History</p>
              <p className="footer-options">Why DuRiu?</p>
              <p className="footer-options">DuRiu's specialness</p>
              <p className="footer-options">DuRiu's activities</p>
              <p className="footer-options">DuRiu's members</p>
              <p className="footer-options">DuRiu's products</p>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">About Kokami</p>
              <a
                href="https://my1.konami.net/en_GB"
                className="footer-options"
                target="blank"
              >
                Visit Kokami
              </a>
              <p className="footer-options">Kokami's products</p>
              <p className="footer-options">Become a friend</p>
              <p className="footer-options">Yu-gi-oh games</p>
            </div>
          </div>
          <div className="footer-right-container">
            <div className="footer-col">
              <p className="footer-col-title">Follow us</p>
              <div className="social-medias">
                <div className="icon-20 facebook"></div>
                <a
                  className="footer-options"
                  href="https://www.facebook.com/duriustudio"
                  target="blank"
                >
                  Facebook
                </a>
              </div>
              <div className="social-medias">
                <div className="icon-20 youtube"></div>
                <a
                  className="footer-options"
                  href="https://www.youtube.com/@RhymxDepTrai"
                  target="blank"
                >
                  Youtube
                </a>
              </div>
              <div className="social-medias">
                <div className="icon-20 github"></div>
                <a
                  className="footer-options"
                  href="https://github.com/LeQuangThanh69420"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
              <div className="social-medias">
                <div className="icon-20 discord"></div>
                <a
                  className="footer-options"
                  href="https://discord.gg/XMggUdNRG"
                  target="blank"
                >
                  Discord
                </a>
              </div>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Technologies Used</p>
              <div className="techs">
                <div className="techs-rows">
                  <div className="icon-32 react"></div>
                  <div className="icon-32 dotnet"></div>
                  <div className="icon-32 sqlServer"></div>
                </div>
                <div className="techs-rows">
                  <div className="icon-32 html"></div>
                  <div className="icon-32 css"></div>
                  <div className="icon-32 js"></div>
                  <div className="icon-32 csharp"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="copy-right">
          <p className="text-footer">
            © 2023 DuRiu Studio - All rights are served
          </p>
        </div>
      </div>
      <ScrollRestoration />
    </AppData.Provider>
  );
}
