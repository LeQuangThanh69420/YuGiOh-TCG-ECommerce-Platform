import { createContext, useEffect, useRef, useState } from "react";

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { getMoney } from "./api/apiUser";

import ToastMessages from "./Components/Shared/ToastMessage";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Bubbles from "./Components/Shared/Bubbles";
import Gacha from "./Components/Gacha/Gacha";
import { banner } from "./constants/gachaBannerInfo";

export const AppData = createContext();

export default function Root() {

  const location = useLocation();

  const [isShow, setIsShow] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const [currentPack, setCurrentPack] = useState(banner[0])

  const [currentRoute, setCurrentRoute] = useState(location.pathname)

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : {});

  const [isScrollTop, setIsScrollTop] = useState(false)

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

  useEffect(() => {
    const { username, avatarURL, token } = userData;
    localStorage.setItem('userData', JSON.stringify({
      username: username,
      avatarURL: avatarURL,
      token: token,
    }))
  }, [userData.avatarURL])

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 300) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false)
      }
    }
  }, [])

  return (
    <AppData.Provider value={{ showToast, setType, setMessage, currentRoute, setCurrentRoute, userData, setUserData, currentPack }}>
      {!(currentRoute === '/login' || currentRoute === '/sign-up') && <Header />}
      {!(currentRoute === '/login' || currentRoute === '/sign-up') && isScrollTop &&
        <div className="go-to-top" onClick={() => {
          window.scroll({
            top: 0,
            behavior: 'smooth'
          })}}>
        </div>
      }
      <Outlet />
      <ToastMessages isDisplay={isShow} type={type} message={message} setIsDisplay={setIsShow} />
      <Footer />
      <ScrollRestoration />
      <Bubbles />
      <Gacha />
    </AppData.Provider>
  );
}
