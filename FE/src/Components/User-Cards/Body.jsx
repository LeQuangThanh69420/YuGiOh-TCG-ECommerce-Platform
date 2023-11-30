/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";

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

  function checkRarity(selectedCard) {
    if (selectedCard.cardRarityName == "R") return "Rare";
    else if (selectedCard.cardRarityName == "N") return "Normal";
    else if (selectedCard.cardRarityName == "SR") return "Super Rare";
    else if (selectedCard.cardRarityName == "UR") return "Ultra Rare";
    else return;
  }

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
        onClose={closeDetails}
        card={
          selectedCard && (
            <div className="CardDetails-content" onClick={event => event.stopPropagation()}>
              <div className="CardDetails-head">
                <div className="CardDetails-DuRiu">
                  <span className="text-secondary">Card</span>{" "}
                  <span className="text-primary">Details</span>
                </div>
                <div className="CardDetails-close" onClick={closeDetails}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                  >
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                  </svg>
                </div>
              </div>
              <div className="CardDetails-body">
                <div className="CardDetails-Image">
                  <img src={selectedCard.cardImageURL} alt="" />
                </div>
                <div className="CardDetails-info">
                  <div className="CardDetails-CardName">
                    <div className="CardDetails-CardName-infoLabel text-secondary">
                      Name:
                    </div>{" "}
                    <div className="CardDetails-CardName-infoName text-third">
                      {selectedCard.cardName}
                    </div>
                  </div>
                  <div className="CardDetails-CardType">
                    <div className="CardDetails-CardName-infoLabel text-secondary">
                      Type:
                    </div>{" "}
                    <div className="CardDetails-CardName-infoName text-third">
                      {selectedCard.cardTypeName}
                    </div>
                  </div>
                  <div className="CardDetails-Rarity">
                    <div className="CardDetails-CardName-infoLabel text-secondary">
                      Rarity:
                    </div>{" "}
                    <div className="CardDetails-CardName-infoName text-third">
                      {checkRarity(selectedCard)}
                    </div>
                  </div>
                  <div className="CardDetails-Origin">
                    <div className="CardDetails-CardName-infoLabel text-secondary">
                      Origin:
                    </div>{" "}
                    <div className="CardDetails-CardName-infoName text-third">
                      {selectedCard.cardOriginName === null
                        ? "None"
                        : selectedCard.cardOriginName}
                    </div>
                  </div>
                  <div className="CardDetails-Element">
                    <div className="CardDetails-CardName-infoLabel text-secondary">
                      Element:
                    </div>{" "}
                    <div className="CardDetails-CardName-infoName text-third">
                      {selectedCard.cardElementName === null
                        ? "None"
                        : selectedCard.cardElementName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      />
    </>
  );
}

export default Body;
