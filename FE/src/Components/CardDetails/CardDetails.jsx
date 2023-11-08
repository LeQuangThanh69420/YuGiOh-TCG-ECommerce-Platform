import React from 'react';

const CardDetails = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="card-details">
      <div className="card-details-content">
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CardDetails;