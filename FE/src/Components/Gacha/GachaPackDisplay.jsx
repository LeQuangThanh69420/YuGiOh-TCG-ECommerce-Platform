import { AppData } from '../../Root';
import './../../styles/GachaPackDisplay.css'
import { useContext, useEffect, useState, useRef } from 'react';

function GachaPackDisplay({ Pack, isOpen, onClose, gachaData }) {
    const packOptionRef = useRef()
    const { showToast, setType, setMessage } = useContext(AppData)
    const [isCardFlipOpen, setIsCardFlipOpen] = useState(false)
    const flippedCards = useRef([])
    const frontRefs = useRef([])
    const backRefs = useRef([])
    const [isCardFlipped, setIscardFlipped] = useState(false)

    function handlePackOpen() {
        if (isOpen) {
            packOptionRef.current.className += 'Gacha-pack-pop'
            setIsCardFlipOpen(true)
            flippedCards.current = [];
        }
    }

    function handleGachaCardFlipClose() {
        setIsCardFlipOpen(false)
    }

    function handleFlipCard(index) {
        if (flippedCards.current.includes(index)) {
            return; // Do nothing if already flipped
        }
    
        // Toggle the flip state for the clicked card
        flippedCards.current.push(index);
        // Apply flip transformation
        frontRefs.current[index].style.transform = "rotateY(0deg)";
        backRefs.current[index].style.transform = "rotateY(180deg)";
    }

    return (
        <>
            {isOpen && <div className="Gacha-pack-display" onClick={onClose}>
                <div className="Gacha-pack-display-wrapper" onClick={handlePackOpen}>
                    <div className="Gacha-pack-display-img" ref={packOptionRef} style={{ backgroundImage: `url(${Pack.packimg})` }} ></div>
                </div>
            </div>}
            {isCardFlipOpen && <div className='Gacha-pack-card-flip' onClick={handleGachaCardFlipClose}>
                <div className="Gacha-pack-card-flip-wrapper" onClick={(event) => { event.stopPropagation() }}>
                    <span className='text-secondary'>You <span className='text-primary'>Received</span></span>
                    <div className="Gacha-pack-card-flip-body">
                        {gachaData.map((item, index) =>
                            <div className='Gacha-pack-card-flip-single-card' key={index} onClick={() => handleFlipCard(index)}>
                                <div className="Gacha-pack-card-front">
                                    <div className='Gacha-pack-cards-front-wrapper' ref={ref => frontRefs.current[index] = ref} style={{transform: "rotateY(-180deg)" ,transition: "transform 0.5s linear" }}>
                                        {/* <div className={`rarity ${item.cardRarityName}`}>{item.cardRarityName}</div> */} {/* doan nay chua fix dc */}
                                        <div className='Gacha-pack-card' style={{ backgroundImage: `url(${item.cardImageURL})` }}></div>
                                    </div>
                                </div>
                                <div className="Gacha-pack-card-back">
                                    <div className='Gacha-pack-cards-back-wrapper back-card absolute' ref={ref => backRefs.current[index] = ref} style={{ transition: "transform 0.5s linear" }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='Gacha-pack-card-flip-skip-wrapper'>
                        <button className='Gacha-pack-card-flip-skip' onClick={handleGachaCardFlipClose}>Skip</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default GachaPackDisplay