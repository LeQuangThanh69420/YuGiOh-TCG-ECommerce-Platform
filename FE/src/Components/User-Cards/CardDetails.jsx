import './../../styles/CardDetails.css';

const CardDetails = ({ isOpen, onClose, card }) => {
  
  if (!isOpen) return null;

  return (
    <div className="CardDetails">
      <div>
      <span className="CardDetails-close" onClick={onClose}>&times;</span>
        {card}
      </div>
    </div>
  );
};

export default CardDetails;