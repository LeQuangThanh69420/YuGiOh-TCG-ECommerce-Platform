import { useContext, useEffect, useState } from "react"

import { AppData } from "../../Root"
import UploadAvatar from "./UploadAvatar"
import UserCards from "./UserCards"

import './../../styles/User.css'
import { getEmail } from "../../api/apiUser"

export default function User() {

  const { userData } = useContext(AppData)

  const [isChanging, setIsChanging] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleOpenChangeAvatar = () => {
    setIsChanging(true);
  }

  useEffect(() => {
    getEmail(userData.username).then((data) => {
      setUserEmail(data);
    })
  }, [])

  return (
    <div className="user-screen">
      <div className="user-container">
        <div className="user-profile">
          <div className="user-avatar-container">
            <img src={userData.avatarURL} className="user-avatar" onClick={handleOpenChangeAvatar} />
          </div>
          <div className="user-info">
            <div className="text-secondary title-profile">
              <div className="info-icon icon-4"></div>
              <span>Your <span className="text-primary">Profile</span></span>
            </div>
            <div className="main-info-container">
              <div className="info-row">
                <span className="text-secondary user-title">User name: </span><span className="text-third user-value">{userData.username}</span>
              </div>
              <div className="info-row">
                <span className="text-secondary user-title">Riu Coins: </span>
                <span className="text-sixth user-value">{userData.money}
                  <div className="riu-coin-icon icon-5"></div>
                </span>
              </div>
              <div className="info-row">
                <span className="text-secondary user-title">Email: </span><span className="text-third user-value">{userEmail}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserCards />
      {isChanging && <UploadAvatar onClose={() => setIsChanging(false)} />}
    </div>
  )
}
