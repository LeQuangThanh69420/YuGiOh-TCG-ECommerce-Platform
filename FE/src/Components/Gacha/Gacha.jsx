import Header from "../Shared/Header"
import "../../styles/Gacha.css"
import { banner } from "../../constants/gachaBannerInfo"


export default function Gacha() {
    return (
        <>
            <div className="Gacha">
                <div className="Gacha-container">
                    <div className="Gacha-pulling-screen">
                        <div className="Gacha-pulling-background">
                            <div className="Gacha-pulling-background-curve">
                                <div className="Gacha-pulling-background-dots">
                                    <div className="Gacha-pulling-img" style={{backgroundImage: `url(${banner[0].img})`}}></div>
                                    <div className="Gacha-pulling-price-button">
                                        <div className="Gacha-pulling-price"></div>
                                        <button className="Gacha-pulling-pull">Pull Card x10</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Gacha-background">
                    <div className="Gacha-background-front"></div>
                    <div className="Gacha-background-behind"></div>
                </div>
            </div>
        </>
    )
}
