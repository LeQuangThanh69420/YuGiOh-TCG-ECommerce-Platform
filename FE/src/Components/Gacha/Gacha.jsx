import Header from "../Shared/Header"
import { useContext, useState } from "react"
import "../../styles/Gacha.css"
import { banner } from "../../constants/gachaBannerInfo"
import GachaPackDisplay from "./GachaPackDisplay"
import { AppData } from "../../Root"

function Gacha() {
    const [currentPack, setCurrentPack] = useState(banner[0])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPackOpen, setPackOpen] = useState(false)

    function goToPack(pack, index){
        setCurrentPack(pack)
        setCurrentIndex(index)
    }

    function openPack(){
        setPackOpen(true)
    }

    function closePack(){
        setPackOpen(false)
    }

    return (
        <>
            <div className="Gacha">
                <div className="Gacha-container">
                    <div className="Gacha-pulling-screen">
                        <div className="Gacha-pulling-background">
                            <div className="Gacha-pulling-background-curve">
                                <div className="Gacha-pulling-background-dots">
                                    <div className="Gacha-pulling-img" style={{ backgroundImage: `url(${currentPack.img})` }} ></div>
                                    <div className="Gacha-pulling-right">
                                        <div className="Gacha-pulling-top"></div>
                                        <div className="Gacha-pulling-text">
                                            <div className="Gacha-pulling-text-top text-primary">{currentPack.name}</div>
                                            <div className="Gacha-pulling-text-bottom text-third">Pack</div>
                                        </div>
                                        <div className="Gacha-pulling-price-button">
                                            <div className="Gacha-pulling-price">
                                                <div className="Gacha-pulling-riu-price text-sixth">{currentPack.price}</div>
                                                <div className="Gacha-pulling-riu-coin-icon riu-coin-icon"></div>
                                            </div>
                                            <button className="Gacha-pulling-pull" onClick={openPack}>Pull Card x10</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Gacha-selection">
                    {banner.map((item, index) =>
                        <div className={`Gacha-selection-banner ${currentIndex == index ? "Gacha-selection-activated" : ''}`} onClick={() => {goToPack(item, index)}} key={index}>{item.name}</div>
                    )}
                </div>
                <div className="Gacha-background">
                    <div className="Gacha-background-front"></div>
                    <div className="Gacha-background-behind"></div>
                </div>
            </div>
            <GachaPackDisplay Pack={currentPack} isOpen={isPackOpen} onClose={closePack}/>
        </>
    )
}

export default Gacha
