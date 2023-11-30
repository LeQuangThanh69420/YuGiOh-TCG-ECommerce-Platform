import { useContext, useState } from "react"

import { AppData } from "../../Root"
import UploadAvatar from "./UploadAvatar"
import Pagination from "./../Shared/Pagination"

import './../../styles/User.css'

export default function User() {

  const { userData } = useContext(AppData)

  const [isChanging, setIsChanging] = useState(false);

  const handleOpenChangeAvatar = () => {
    setIsChanging(true);
  }

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
                <span className="text-secondary user-title">Email: </span><span className="text-third user-value">email goes here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} numberItem={2}/>
      {isChanging && <UploadAvatar onClose={() => setIsChanging(false)} />}
    </div>
  )
}
