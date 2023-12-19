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
    const [isRenderCards, setIsRenderCards] = useState(false)

    useEffect(() => {
        let timeoutId;
    
        if (isCardFlipOpen) {
          timeoutId = setTimeout(() => {
            setIsRenderCards(true);
          }, 499);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [isCardFlipOpen]);

    function handlePackOpen() {
        if (isOpen) {
            packOptionRef.current.classList.add('Gacha-pack-pop')
            setTimeout(() => {onClose()}, 500 )
            setIsCardFlipOpen(true)
            flippedCards.current = [];
        }
    }

    function handleGachaCardFlipClose() {
        setIsCardFlipOpen(false)
        setIsRenderCards(false); // Reset render state when closing
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

    function handleSkip(){
        for(let i=0; i< gachaData.length ; i++){
            if (flippedCards.current.includes(i)) {
                continue; // Do nothing if already flipped
            }
            flippedCards.current.push(i);
            // Apply flip transformation
            frontRefs.current[i].style.transform = "rotateY(0deg)";
            backRefs.current[i].style.transform = "rotateY(180deg)";
        }
    }

    return (
        <>
            {isOpen && <div className="Gacha-pack-display" onClick={onClose}>
                <div className="Gacha-pack-display-wrapper" onClick={(event) => { event.stopPropagation() }}>
                    <div className="Gacha-pack-display-img" ref={packOptionRef} style={{ backgroundImage: `url(${Pack.packimg})` }} onClick={handlePackOpen}></div>
                </div>
            </div>}
            {isCardFlipOpen && isRenderCards && <div className='Gacha-pack-card-flip' onClick={handleGachaCardFlipClose}>
                <div className="Gacha-pack-card-flip-wrapper" onClick={(event) => { event.stopPropagation() }}>
                    <div className="Gacha-pack-card-flip-body">
                        {gachaData.map((item, index) =>
                            <div className='Gacha-pack-card-flip-single-card' key={index} onClick={() => handleFlipCard(index)}>
                                <div className="Gacha-pack-card-front">
                                    <div className='Gacha-pack-cards-front-wrapper' ref={ref => frontRefs.current[index] = ref} style={{transform: "rotateY(-180deg)" ,transition: "transform 0.5s linear" }}>
                                        <div className='Gacha-pack-card' style={{ backgroundImage: `url(${item.cardImageURL})` }}>
                                            <div className={`rarity ${item.cardRarityName} Gacha-pack-card-rarity`}>{item.cardRarityName}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Gacha-pack-card-back">
                                    <div className='Gacha-pack-cards-back-wrapper back-card absolute' ref={ref => backRefs.current[index] = ref} style={{ transition: "transform 0.5s linear" }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='Gacha-pack-card-flip-skip-wrapper' onClick={(event) => { event.stopPropagation() }}>
                    <button className='Gacha-pack-card-flip-skip' onClick={handleSkip}>Skip</button>
                    <button className='Gacha-pack-card-flip-close' onClick={handleGachaCardFlipClose}>Close</button>
                </div>
            </div>}
        </>
    )
}

export default GachaPackDisplay