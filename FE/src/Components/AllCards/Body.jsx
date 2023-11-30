/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardDetails from "../Shared/CardDetails";

import "./../../styles/CardDetails.css";
import "./../../styles/Body.css";

function Body({ cards, setCards }) {
  const [isCardDetailsOpen, setCardDetailsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openDetails = (cards) => {
    setSelectedCard(cards);
    setCardDetailsOpen(true);
  };

  const closeDetails = () => {
    setSelectedCard(null);
    setCardDetailsOpen(false);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/Card/searchCard")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <>
      <div className="body-session">
        <div className="body-container">
          {cards.length ? (
            cards.map((item, index) => (
              <div
                className="cards"
                key={index}
                onClick={() => openDetails(item)}
              >
                <div className={`rarity ${item.cardRarityName}`}>
                  {item.cardRarityName}
                </div>
                <img src={item.cardImageURL} alt="" className="cards-img" />
              </div>
            ))
          ) : (
            <p className="not-found text-secondary">
              Sorry, we couldn't find what you want :(
            </p>
          )}
        </div>
      </div>
      <CardDetails
        isOpen={isCardDetailsOpen}
        selectedCard={selectedCard}
        onClose={closeDetails}
      />
    </>
  );
}

export default Body;
