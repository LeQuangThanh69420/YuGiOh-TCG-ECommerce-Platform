import React from 'react';

const CardDetails = ({ isOpen, onClose, card }) => {
  if (!isOpen) return null;

  return (
    <div className="CardDetails">
      <div>
      <span class="CardDetails-close" onClick={onClose}>&times;</span>
        {card}
      </div>
    </div>
  );
};

export default CardDetails;