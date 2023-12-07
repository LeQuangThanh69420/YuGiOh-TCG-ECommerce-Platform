import { useContext, useEffect, useState } from "react"

import { getOwnedCardsSeperateDisplay } from "../../api/apiUserCard"

import { AppData } from "../../Root";

import './../../styles/User.css'

export default function UserCards() {

  const { userData } = useContext(AppData)

  const [cardOwned, setCardOwned] = useState([]);

  useEffect(() => {
    getOwnedCardsSeperateDisplay(userData.username).then(data => {
      setCardOwned(data);
    })
  }, [])

  return (
    <div className="user-cards-container">
      {cardOwned.map((card, index) => 
        <div className="cards" key={index}>
          <div className={`rarity ${card.cardRarityName}`}>{card.cardRarityName}</div>
          <img src={card.cardImageURL} className="cards-img"/>
        </div>
      )}
    </div>
  )
}
