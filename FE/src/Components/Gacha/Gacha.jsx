import Header from "../Shared/Header"
import { useContext, useState } from "react"
import "../../styles/Gacha.css"
import { banner } from "../../constants/gachaBannerInfo"
import GachaPackDisplay from "./GachaPackDisplay"
import { AppData } from "../../Root"
import ConfirmModal from "../Shared/ConfirmModal"
import { gacha } from "../../api/apiGacha"
import { getMoney } from "../../api/apiUser"
import { Link } from "react-router-dom"

function Gacha() {
    const [currentPack, setCurrentPack] = useState(banner[0])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {userData, setUserData, setType, setMessage, showToast } = useContext(AppData)
    const [isPackOpen, setPackOpen] = useState(false)
    const [gachaCardData, setGachaCardData] = useState()

    function goToPack(pack, index){
        setCurrentPack(pack)
        setCurrentIndex(index)
    }

    function openPack(){
        setIsModalOpen(true)
    }

    function closePack(){
        setPackOpen(false)
    }

    async function handlePullCard(){
        const response = await gacha(userData.username, currentPack.type)
        response.json().then(data => {
            if(response.status === 200){
                setType('toast-success')
                setPackOpen(true)
                getMoney(userData.username).then(money => {
                    setUserData(prev => ({
                        ...prev,
                        money: money
                    }))
                })
                setMessage('Purchase successfully!')
            }
            else{
                setMessage(data.message);
                setType('toast-error')
            }
            showToast()
            setGachaCardData(data)
        })
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
                                        <div className="Gacha-pulling-top-wrapper">
                                            <div className="Gacha-pulling-top"></div>
                                        </div>
                                        <div className="Gacha-pulling-text">
                                            <div className="Gacha-pulling-text-top text-primary">{currentPack.name}</div>
                                            <div className="Gacha-pulling-text-bottom text-third">Pack</div>
                                        </div>
                                        <div className="Gacha-pulling-price-button">
                                            <div className="Gacha-pulling-price">
                                                <div className="Gacha-pulling-riu-price text-sixth">{currentPack.price}</div>
                                                <div className="Gacha-pulling-riu-coin-icon riu-coin-icon"></div>
                                            </div>
                                            {userData.username == null ? (
                                                <button className="Gacha-pulling-pull-disabled" disabled onClick={openPack}>Pull Card x10</button>
                                            ) : (
                                                <button className="Gacha-pulling-pull" onClick={openPack}>Pull Card x10</button>
                                            )}
                                        </div>
                                    </div>
                                    {userData.username == null ? (
                                        <span className="Gacha-authority-check text-third">You must <Link to={'/login'}><span className="text-primary">Login</span></Link> to use this feature</span>
                                    ) : (
                                        null
                                    )}
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
            <GachaPackDisplay Pack={currentPack} isOpen={isPackOpen} onClose={closePack} gachaData={gachaCardData}/>
            <ConfirmModal isOpen={isModalOpen} title={<span className="text-secondary">Purchasing <span className="text-primary">Pack</span></span>} content={<span>Are you sure you want to purchase this pack?</span>} setIsOpen={setIsModalOpen} onOK={handlePullCard}/>
        </>
    )
}

export default Gacha

