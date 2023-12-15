import { useContext, useEffect, useState } from "react";

import {
  CHANGE_EMAIL_INPUTS,
  CHANGE_PASSWORD_INPUTS,
} from "../../constants/inputsUserInfo";
import {HEADER_BOUGHT, HEADER_SOLD} from './../../constants/userBoughtDeals.js'

import { changeEmail, changePassword, getEmail } from "../../api/apiUser";
import { getSoldDeals, getBoughtDeals } from "../../api/apiDeal";
import {renderDealsRow} from './../../utils/renderDealsRow.jsx'

import { AppData } from "../../Root";
import UploadAvatar from "./UploadAvatar";
import UserCards from "./UserCards";
import FormModal from "../Shared/FormModal";
import Input from "../Shared/Input/Input";
import UserDealsSelling from "./UserDealsSelling";
import UserDealsBoughtSold from "./UserDealsBoughtSold";

import "./../../styles/User.css";

export default function User() {
  const { userData, showToast, setType, setMessage } = useContext(AppData);

  const [isChanging, setIsChanging] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [isDisplayModal2, setIsDisplayModal2] = useState(false);
  const [changeEmailObject, setChangeEmailObject] = useState({
    currentPassword: "",
    currentEmail: "",
    newEmail: "",
  });
  const [changePasswordObject, setChangePasswordObject] = useState({
    currentPassword: "",
    repeatPassword: "",
    newPassword: "",
  });

  const handleOpenChangeAvatar = () => {
    setIsChanging(true);
  };

  const handleOpenModal = (type) => {
    if (type === "email") {
      setIsDisplayModal(true);
    } else if (type === "password") {
      setIsDisplayModal2(true);
    }
  };

  const handleChangeEmail = async () => {
    const response = await changeEmail(
      userData.username,
      changeEmailObject.currentPassword,
      changeEmailObject.currentEmail,
      changeEmailObject.newEmail
    );
    if (response.status === 200) {
      setUserEmail(changeEmailObject.newEmail);
      setIsDisplayModal(false);
      setType("toast-success");
      setMessage("Change Email successfully");
    } else {
      response.json().then((data) => {
        setType("toast-error");
        setMessage(data.message);
      });
    }
    showToast();
  };

  const handleChangePassword = async () => {
    if (changePasswordObject.currentPassword !== changePassword) {
      const response = await changePassword(userData.username, changePasswordObject.currentPassword, changePasswordObject.newPassword)
      response.json().then(data => {
        setMessage(data.message)
        if(response.status === 200) {
          setType('toast-success')
        } else {
          setType('toast-error')
        }
      })
      showToast();
    }
  }

  useEffect(() => {
    getEmail(userData.username).then((data) => {
      setUserEmail(data);
    });
  }, []);

  return (
    <div className="user-screen">
      <div className="user-container">
        <div className="user-profile">
          <div className="user-avatar-container">
            <img
              src={userData.avatarURL}
              className="user-avatar"
              onClick={handleOpenChangeAvatar}
            />
          </div>
          <div className="user-info">
            <div className="text-secondary title-profile">
              <div className="info-icon icon-4"></div>
              <span>
                Your <span className="text-primary">Profile</span>
              </span>
            </div>
            <div className="line-2"></div>
            <div className="main-info-container">
              <div className="info-row">
                <span className="text-secondary user-title">User name: </span>
                <span className="text-third user-value">
                  {userData.username}
                </span>
              </div>
              <div className="info-row">
                <span className="text-secondary user-title">Riu Coins: </span>
                <span className="text-sixth user-value">
                  {userData.money}
                  <div className="riu-coin-icon icon-5"></div>
                </span>
              </div>
              <div className="info-row">
                <span className="text-secondary user-title">Email: </span>
                <span className="text-third user-value">{userEmail}</span>
              </div>
              <div className="change-info-buttons">
                <button
                  className="change-info-button"
                  onClick={() => handleOpenModal("email")}
                >
                  <div className="mail-white icon-3"></div>
                  Change Email
                </button>
                <button
                  className="change-info-button"
                  onClick={() => handleOpenModal("password")}
                >
                  <div className="lock-white icon-3"></div>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserDealsSelling />
      <UserCards />
      <UserDealsBoughtSold type={"Sold"} apiCall={getSoldDeals} headerArr={HEADER_SOLD} renderDealsRow={renderDealsRow}/>
      <UserDealsBoughtSold type={"Bought"} apiCall={getBoughtDeals} headerArr={HEADER_BOUGHT} renderDealsRow={renderDealsRow}/>
      <FormModal
        title={
          <span className="text-secondary">
            Change <span className="text-primary">Email</span>
          </span>
        }
        isDisplay={isDisplayModal}
        setIsDisplay={setIsDisplayModal}
        inputs={CHANGE_EMAIL_INPUTS}
        renderInput={(inputItem) => (
          <Input
            key={inputItem.id}
            label={inputItem.label}
            type={inputItem.type}
            icon={inputItem.icon_class_name}
            regex={inputItem.regex}
            errorMessage={inputItem.error_message}
            setData={(inputValue) => {
              setChangeEmailObject((prev) => ({
                ...prev,
                [inputItem.data_key]: inputValue,
              }));
            }}
          />
        )}
        onSubmit={handleChangeEmail}
      />
      <FormModal
        title={
          <span className="text-secondary">
            Change <span className="text-primary">Password</span>
          </span>
        }
        isDisplay={isDisplayModal2}
        setIsDisplay={setIsDisplayModal2}
        inputs={CHANGE_PASSWORD_INPUTS}
        renderInput={(inputItem) => (
          <Input
            key={inputItem.id}
            label={inputItem.label}
            type={inputItem.type}
            icon={inputItem.icon_class_name}
            regex={inputItem.is_regex ? inputItem.regex : changePasswordObject[inputItem.regex_key]}
            isRegexChecking={inputItem.is_regex}
            setData={(inputValue) => {
              setChangePasswordObject(prev => ({
                ...prev,
                [inputItem.data_key]: inputValue
              }))
            }}
            errorMessage={inputItem.error_message}
          />
        )}
        onSubmit={handleChangePassword}
      />
      {isChanging && <UploadAvatar onClose={() => setIsChanging(false)} />}
    </div>
  );
}
