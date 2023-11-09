/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './../../styles/Body.css'
import './../../styles/CardDetails.css'
import CardDetails from './CardDetails';

function Body({ cards, setCards }) {
    const [isCardDetailsOpen, setCardDetailsOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const openDetails = (cards) => {
        setSelectedCard(cards);
        setCardDetailsOpen(true);
    };

    const closeDetails = () => {
        setSelectedCard(null);
        setCardDetailsOpen(false);
    };

    useEffect(() => {
        fetch('http://localhost:5233/api/Card/searchCard')
            .then(res => res.json())
            .then(data => { setCards(data) })
    }, [])

    function checkRarity(selectedCard) {
        if(selectedCard.cardRarityName == 'R') return 'Rare'
        else if(selectedCard.cardRarityName == 'N') return 'Normal'
        else if(selectedCard.cardRarityName == 'SR') return 'Super Rare'
        else if(selectedCard.cardRarityName == 'UR') return 'Ultra Rare'
        else return 'Bucac'
    }

    return (
        <>
            <div className='body-session'>
                < div className="body-container" >
                    {
                        cards.length ? cards.map((item, index) =>
                            <div className='cards' key={index} onClick={() => openDetails(item)}>
                                <div className={`rarity ${item.cardRarityName}`}>
                                    {item.cardRarityName}
                                </div>
                                <img src={item.cardImageURL} alt="" className='cards-img' />
                            </div>
                        ) : <p className='not-found'>
                            Sorry, we couldn't find what you want :(
                        </p>
                    }
                </div >
            </div>
            <CardDetails isOpen={isCardDetailsOpen} onClose={closeDetails} card={
                selectedCard && <div className="CardDetails-content">
                    <div className="CardDetails-Image">
                        <img src={selectedCard.cardImageURL} alt="" />
                    </div>
                    <div className="CardDetails-info">
                        <div className="CardDetails-CardName">Name: <p>{selectedCard.cardName}</p></div>
                        <div className="CardDetails-CardType">Type: <p>{selectedCard.cardTypeName}</p></div>
                        <div className="CardDetails-Rarity">Rarity: <p>{checkRarity(selectedCard)}</p></div>
                        <div className="CardDetails-Origin">Origin: <p>{ (selectedCard.cardOriginName === null) ? "None" : selectedCard.cardOriginName}</p></div>
                        <div className="CardDetails-Element">Element: <p>{ (selectedCard.cardElementName === null) ? "None" : selectedCard.cardElementName}</p></div>
                    </div>
                </div>
            }/>
        </>

    )
}

export default Body