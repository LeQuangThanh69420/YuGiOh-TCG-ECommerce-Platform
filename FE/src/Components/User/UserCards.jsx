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
  const [isStack, setIsStack] = useState();

  const handleOpenDetail = (card) => {
    if (card.quantity > 0) {
      setIsOpen(true)
      setCardSelected(card);
    }
  }

  const handleToggleViewOption = () => {
    setIsStack(!isStack);
    setCurrentPage(1);
  }

  useEffect(() => {
    if (isStack) {
      getOwnedCardsStack(userData.username).then(data => {
        setCardOwned(data);
      })
    } else {
      getOwnedCardsSeperate(userData.username).then(data => {
        setCardOwned(data);
        setIsStack(false);
      })
    }
  }, [isStack])

  return (
    <>
      <div className="user-cards-wrapper">
        <div className="user-cards-title">
          <p>
            <span className="text-secondary">Your </span>
            <span className="text-primary">Cards</span>
          </p>
          <div className="user-cards-view-option" onClick={handleToggleViewOption}>
            <div className={`${!isStack ? 'cards-stack' : 'cards-seperate'} icon-8`}>
            </div>
            {!isStack ?
              <span className="text-third">Stack</span> :
              <span className="text-third">Seperate</span>
            }
          </div>

        </div>

        <div className="user-cards-container">
          {displayCards.map((card, index) =>
            <div className={`cards ${!card.quantity && 'not-owned'}`} key={index} onClick={() => handleOpenDetail(card)}>
              {card.onDeal && <div className="cards-on-deal">Selling</div>}
              <div className={`rarity ${card.cardRarityName}`}>{card.cardRarityName}</div>
              <div className="cards-img-wrapper">
                <img src={card.cardImageURL} className="cards-img" />
                <div className="cards-quantity">{card.quantity}</div>
              </div>
            </div>
          )}
        </div>
        <Pagination currentPage={currentPage} list={cardOwned} numberItem={10} setCurrentPage={setCurrentPage} setPagedList={setDisplayCards} />
      </div>
      <CardDetails isOpen={isOpen} selectedCard={cardSelected} onClose={() => setIsOpen(false)} />
    </>

  )
}
