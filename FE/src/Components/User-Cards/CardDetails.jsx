import './../../styles/CardDetails.css';

const CardDetails = ({ isOpen,  card , onClose}) => {
  
  if (!isOpen) return null;

  return (
    <div className="CardDetails" onClick={onClose}>
      <div>
        {card}
      </div>
    </div>
  );
};

export default CardDetails;