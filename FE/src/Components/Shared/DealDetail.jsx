import './../../styles/DealDetails.css';

const DealDetails = ({ isOpen, selectedDeal, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="DealDetails">
      <div className="DealDetails-content">
        <div className="DealDetails-head">
          <div className="DealDetails-DuRiu">
            <span className="text-secondary">Deal</span>{" "}
            <span className="text-primary">Details</span>
          </div>
          <div className="DealDetails-close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
          </div>
        </div>
        <div className="DealDetails-body">
          <div className="DealDetails-pic-preview">
            <div className={`rarity ${selectedDeal.cardRarityName}`}>
              {selectedDeal.cardRarityName}
            </div>
            <div className="DealDetails-img" style={{ backgroundImage: `url(${selectedDeal.cardImageURL})` }}></div>
          </div>
          <div className="DealDetails-details-container">
            <div className="DealDetails-details">
              <div className="DealDetails-label text-secondary">Seller: </div>
              <div className="DealDetails-info text-third">{selectedDeal.sellUsername}</div>
            </div>
            <div className="DealDetails-details-date">
              <div className="DealDetails-label text-secondary">Published Date: </div>
              <div className="DealDetails-name-info text-third">{selectedDeal.createDate}</div>
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
        </div>
        <div className="DealDetails-bottom">
          <div className="DealDetails-bottom-price"><div>{selectedDeal.price}</div><span><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.7088 19.8686C37.7088 29.7577 29.692 37.7745 19.8028 37.7745C9.91367 37.7745 1.89691 29.7577 1.89691 19.8686C1.89691 9.97939 9.91367 1.96263 19.8028 1.96263C29.692 1.96263 37.7088 9.97939 37.7088 19.8686Z" fill="#FFDA56" stroke="#D99C00" stroke-width="3" />
            <path d="M14.5103 12.8119H22.4491C22.7431 12.8119 23.5076 12.9883 24.2133 13.6939C24.9189 14.3996 25.0954 15.7522 25.0954 16.3402V18.9865C25.0954 19.5745 24.0369 20.7506 23.3312 20.7506C22.6255 20.7506 21.567 20.7506 21.567 20.7506M21.567 20.7506H15.3924V27.8073M21.567 20.7506L25.9775 27.8073" stroke="#D99C00" stroke-width="3" />
          </svg></span></div>
          <div className="DealDetails-bottom-buttons">
            <button className="DealDetails-bottom-buy">Buy</button>
            <button className="DealDetails-bottom-cancel" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetails;