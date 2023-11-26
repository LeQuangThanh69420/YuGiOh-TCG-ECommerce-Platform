import { createContext, useEffect, useRef, useState } from "react";

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { getMoney } from "./api/apiUser";

import ToastMessages from "./Components/Shared/ToastMessage";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

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
      <Footer />
      <ScrollRestoration />
    </AppData.Provider>
  );
}
