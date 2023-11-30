import './../../styles/CardDetails.css';

const CardDetails = ({ isOpen, card, onClose }) => {

  return (
    <>
      {isOpen && <div className="CardDetails" onClick={onClose}>
        <div>
          {card}
        </div>
      </div>}
    </>

  );
};

export default CardDetails;