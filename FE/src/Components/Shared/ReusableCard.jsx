

export default function ReusableCard({card, onClick}) {
  return (
    <div className={`cards ${!card.quantity ? 'not-owned' : ''}`} onClick={onClick}>
    {card.onDeal && <div className="cards-on-deal">Selling</div>}
    <div className={`rarity ${card.cardRarityName}`}>{card.cardRarityName}</div>
    <div className="cards-img-wrapper">
      <img src={card.cardImageURL} className="cards-img" />
      <div className="cards-quantity">{card.quantity}</div>
    </div>
  </div>
  )
}
