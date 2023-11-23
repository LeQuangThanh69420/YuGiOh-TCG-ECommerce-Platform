import './../../styles/CardDetails.css';

const CardDetails = ({ isOpen,  card }) => {
  
  if (!isOpen) return null;

  return (
    <div className="CardDetails">
      <div>
        {card}
      </div>
    </div>
  );
};

export default CardDetails;