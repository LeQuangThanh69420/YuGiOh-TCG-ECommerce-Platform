import { useContext, useEffect, useState } from 'react'
import Input from '../Shared/Input/Input'

import './../../styles/UserAllDeals.css'
import { AppData } from '../../Root';
import { getOwnedCardsSeperate } from '../../api/apiUserCard';

export default function DealModal({ isOpen, setIsOpen, title, price, card }) {

  const {userData} = useContext(AppData)

  const [inputValue, setInputValue] = useState('');
  const [chosingCards, setChosingCards] = useState([]);

  useEffect(() => {
    getOwnedCardsSeperate(userData.username).then((data) => {
      setChosingCards(data);
    })
  }, [])


  return (
    <>
      {isOpen && <div className='deal-modal-screen' onClick={() => setIsOpen(false)}>
        <div className='deal-modal-container' onClick={(event) => {event.stopPropagation()}}>
          <div className='close-icon icon-5' onClick={() => setIsOpen(false)}></div>
          <p className='deal-modal-title'>{title}</p>
          <div className='deal-modal-body'>
            <Input label={"Enter price for this deal"} type={"number"} setData={setInputValue}/>
            <div className='deal-modal-card-choser'>
              {chosingCards.map(card => 
                <div key={card.userCardId} className='deal-modal-card-wrapper'>
                  <img src={card.cardImageURL} className='deal-modal-card-img'/>
                </div>
              )}
            </div>
          </div>
          <div className='deal-modal-buttons'>
            <button className='button-2'>Cancel</button>
            <button>OK</button>
          </div>
        </div>
      </div>}
    </>
  )
}