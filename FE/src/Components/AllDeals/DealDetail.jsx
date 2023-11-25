import './../../styles/DealDetails.css';

const DealDetails = ({ isOpen,  deal }) => {
  
  if (!isOpen) return null;

  return (
    <div className="DealDetails">
      <div>
        {deal}
      </div>
    </div>
  );
};

export default DealDetails;