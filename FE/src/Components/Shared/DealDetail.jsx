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
          <div className="DealDetails-close close-icon icon-5" onClick={onClose} ></div>
        </div>
        <div className="DealDetails-body">
          <div className="DealDetails-pic-preview">
            <div className="DealDetails-img" style={{ backgroundImage: `url(${selectedDeal.cardImageURL})` }}></div>
          </div>
          <div className="DealDetails-details-container">
            <div className="DealDetails-details-body-head">
                <img src={selectedDeal.sellUsernameAvatarUrl} className="header-user-avt-display" style={{ width: '50px', height: '50px' }} />
              <div className="DealDetails-details-body-head-info">
                <span className="DealDetails-sell-user text-third">{selectedDeal.sellUsername}</span>
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
              <div className="DealDetails-bottom-price">
                <span className='text-sixth deal-price'>{selectedDeal.price}</span>
                <div className='riu-coin-icon icon-9'></div>
              </div>
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