import { useContext, useEffect, useState } from "react"

import { getOwnedCardsSeperate, getOwnedCardsStack } from "../../api/apiUserCard"

import { AppData } from "../../Root";
import CardDetails from "../Shared/CardDetails";
import Pagination from "../Shared/Pagination";

import './../../styles/User.css'

export default function UserCards() {

  const { userData } = useContext(AppData)

  const [cardOwned, setCardOwned] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cardSelected, setCardSelected] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenDetail = (card) => {
    setIsOpen(true)
    setCardSelected(card);
    console.log(card);
  }

  useEffect(() => {
    getOwnedCardsSeperate(userData.username).then(data => {
      setCardOwned(data);
    })
  }, [])

  return (
    <>
      <div className="user-cards-wrapper">
        <p className="user-cards-title">
          <span className="text-second">Your </span>
          <span className="text-primary">Cards</span>
        </p>
        <div className="user-cards-container">
          {displayCards.map((card, index) =>
            <div className="cards" key={index} onClick={() => handleOpenDetail(card)}>
              <div className={`rarity ${card.cardRarityName}`}>{card.cardRarityName}</div>
              <img src={card.cardImageURL} className="cards-img" />
            </div>
          )}
        </div>
        <Pagination currentPage={currentPage} list={cardOwned} numberItem={10} setCurrentPage={setCurrentPage} setPagedList={setDisplayCards}/>
      </div>
      <CardDetails isOpen={isOpen} selectedCard={cardSelected} onClose={() => setIsOpen(false)} />
    </>

  )
}
