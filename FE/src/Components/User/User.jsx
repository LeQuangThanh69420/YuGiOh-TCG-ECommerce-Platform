import { useContext } from "react"

import { AppData } from "../../Root"

import './../../styles/User.css'

export default function User() {

  const { userData } = useContext(AppData)

  return (
    <div className="user-screen">
      <div className="user-container">
        <div className="user-profile">
          <div className="user-avatar-container">
            <img src={userData.avatarURL} className="user-avatar" />
            <button>Change Avatar</button>
          </div>
          <div className="user-info">
            <p className="text-secondary title-profile">
              <div className="info-icon icon-4"></div>
              <span>Your <span className="text-primary">Profile</span></span>
            </p>
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
      <div className="">

      </div>
    </div>
  )
}
