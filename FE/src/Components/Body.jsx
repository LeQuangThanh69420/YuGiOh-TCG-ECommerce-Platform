/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './Body.css'

function Body({ cards, setCards }) {

    useEffect(() => {
        fetch('http://localhost:5233/api/Card/searchCard')
            .then(res => res.json())
            .then(data => { setCards(data) })
    }, [])


    return (
        <div className='body-session'>
            < div className="body-container" >
                {
                    cards.length ? cards.map((item, index) =>
                        <div className='cards' key={index}>
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
    )
}

export default Body