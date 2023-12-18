import './../../styles/CardDetails.css';

const CardDetails = ({ isOpen, selectedCard, onClose, isManaging = false, onAddDeal }) => {

  function checkRarity(selectedCard) {
    if (selectedCard.cardRarityName == "R") return "Rare";
    else if (selectedCard.cardRarityName == "N") return "Normal";
    else if (selectedCard.cardRarityName == "SR") return "Super Rare";
    else if (selectedCard.cardRarityName == "UR") return "Ultra Rare";
    else return;
  }

  return (
    <>
      {isOpen && <div className="CardDetails" onClick={onClose}>
        <div className="CardDetails-content" onClick={event => event.stopPropagation()}>
          <div className="CardDetails-head">
            <div className="CardDetails-DuRiu">
              <span className="text-secondary">Card</span>{" "}
              <span className="text-primary">Details</span>
            </div>
            <div className="close-icon icon-5" onClick={onClose}>
            </div>
          </div>
          <div className="CardDetails-body">
            <div className="CardDetails-Image">
              <img src={selectedCard.cardImageURL} alt="" />
            </div>
            <div className='CardDetails-info-wrapper'>
              <div className="CardDetails-info">
                <div className="CardDetails-CardName">
                  <span className="CardDetails-CardName-infoLabel text-secondary">
                    Name: 
                  </span>
                  <span className='CardDetails-CardName-infoName text-third'> {selectedCard.cardName}</span>
                </div>
                <div className="CardDetails-Feature">
                  <div className="CardDetails-CardName-infoLabel text-secondary">
                    Type:
                  </div>{" "}
                  <div className="CardDetails-CardName-infoName text-third">
                    {selectedCard.cardTypeName}
                  </div>
                </div>
                <div className="CardDetails-Feature">
                  <div className="CardDetails-CardName-infoLabel text-secondary">
                    Rarity:
                  </div>{" "}
                  <div className="CardDetails-CardName-infoName text-third">
                    {checkRarity(selectedCard)}
                  </div>
                </div>
                <div className="CardDetails-Feature">
                  <div className="CardDetails-CardName-infoLabel text-secondary">
                    Origin:
                  </div>{" "}
                  <div className="CardDetails-CardName-infoName text-third">
                    {selectedCard.cardOriginName === null
                      ? "None"
                      : selectedCard.cardOriginName}
                  </div>
                </div>
                <div className="CardDetails-Feature">
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
              {isManaging && !selectedCard.onDeal && !!selectedCard.userCardId &&
                <div className='CardDetails-buttons'>
                  <button className='button-2' onClick={onClose}>Cancel</button>
                  <button onClick={onAddDeal}>Sell</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>}
    </>

  );
};

export default CardDetails;