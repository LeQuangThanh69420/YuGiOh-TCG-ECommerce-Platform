import './../../styles/DealDetails.css';

const DealDetails = ({ isOpen, selectedDeal, onClose, onBuy }) => {

  function checkRarity(selectedDeal) {
    if (selectedDeal.cardRarityName == 'R') return 'Rare'
    else if (selectedDeal.cardRarityName == 'N') return 'Normal'
    else if (selectedDeal.cardRarityName == 'SR') return 'Super Rare'
    else if (selectedDeal.cardRarityName == 'UR') return 'Ultra Rare'
    else return 'Bucac'
  }

  function checkDate(selectedDeal){
    var date = new Date(selectedDeal.createDate);
  }

  if (!isOpen) return null;

  return (
    <>
    <div className="DealDetails">
      <div className="DealDetails-content">
        <div className="DealDetails-head">
          <div className="DealDetails-DuRiu">
            <span className="text-secondary">Deal</span>{" "}
            <span className="text-primary">Details</span>
          </div>
          <div className="DealDetails-close close-icon icon-5" onClick={onClose} >
        </div>
        </div>
        <div className="DealDetails-body">
          <div className="DealDetails-pic-preview">
            <div className="DealDetails-img" style={{ backgroundImage: `url(${selectedDeal.cardImageURL})` }}></div>
          </div>
          <div className="DealDetails-details-container">
            <div className="DealDetails-details-body-head">
                <img src={selectedDeal.sellUsernameAvatarUrl} className="header-user-avt-display" style={{ width: '50px', height: '50px' }} />
              <div className="DealDetails-details-body-head-info">
                <div className="DealDetails-info text-third">{selectedDeal.sellUsername}</div>
                <div className="DealDetails-name-info-date text-forth">{selectedDeal.createDate}</div>
              </div>
            </div>
            <div className="DealDetails-details-body-body">
              <div className="DealDetails-details">
                <div className="DealDetails-label text-secondary">Rarity: </div>
                <div className="DealDetails-name-info text-third">{checkRarity(selectedDeal)}</div>
              </div>
              <div className="DealDetails-details-name">
                <div className="DealDetails-label text-secondary">Card Name: </div>
                <div className="DealDetails-name-info text-third">{selectedDeal.cardName}</div>
              </div>
              <div className="DealDetails-details">
                <div className="DealDetails-label text-secondary">Card Element: </div>
                <div className="DealDetails-info text-third">{selectedDeal.cardElementName == null ? "None" : selectedDeal.cardElementName}</div>
              </div>
              <div className="DealDetails-details">
                <div className="DealDetails-label text-secondary">Card Origin: </div>
                <div className="DealDetails-info text-third">{selectedDeal.cardOriginName == null ? "None" : selectedDeal.cardOriginName}</div>
              </div>
            </div>
            <div className="DealDetails-details-body-bottom">
              <div className="DealDetails-bottom-price"><div>{selectedDeal.price}</div><span><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.7088 19.8686C37.7088 29.7577 29.692 37.7745 19.8028 37.7745C9.91367 37.7745 1.89691 29.7577 1.89691 19.8686C1.89691 9.97939 9.91367 1.96263 19.8028 1.96263C29.692 1.96263 37.7088 9.97939 37.7088 19.8686Z" fill="#FFDA56" stroke="#D99C00" stroke-width="3" />
                <path d="M14.5103 12.8119H22.4491C22.7431 12.8119 23.5076 12.9883 24.2133 13.6939C24.9189 14.3996 25.0954 15.7522 25.0954 16.3402V18.9865C25.0954 19.5745 24.0369 20.7506 23.3312 20.7506C22.6255 20.7506 21.567 20.7506 21.567 20.7506M21.567 20.7506H15.3924V27.8073M21.567 20.7506L25.9775 27.8073" stroke="#D99C00" stroke-width="3" />
              </svg></span></div>
            </div>
          </div>
        </div>
        <div className="DealDetails-bottom">
          <div className="DealDetails-bottom-buttons">
            <button className="DealDetails-bottom-cancel" onClick={onClose}>Cancel</button>
            <button className="DealDetails-bottom-buy" onClick={onBuy}>Buy</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DealDetails;