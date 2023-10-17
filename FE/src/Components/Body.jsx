import { useEffect, useState } from 'react'
import './Body.css'

function Body() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5233/api/Card/searchCard')
            .then(res => res.json())
            .then(data => {setCards(data)})
    }, [])

    console.log(cards);

    return (
        <div className='body-session'>
            < div className="body-container" >
                {
                    cards.map((item, index) => 
                        <div className='cards' key={index}>
                            <div className='card-name'>
                                {item.cardName}
                            </div>
                            <img src={item.cardImageURL} alt="" className='cards-img'/>
                            <div className='rarity'>
                                {item.cardRarityName}
                            </div>
                        </div>
                    )
                }
            </div >
        </div>
    )
}

export default Body