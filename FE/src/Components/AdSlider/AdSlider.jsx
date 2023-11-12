import { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import './../../styles/AdSlider.css'
import Ad1 from './../../constants/SliderLoginNow.png'
import Ad2 from './../../constants/SliderRegisterNow.png'
import Ad3 from './../../constants/SliderTryLuck.png'
import Ad4 from './../../constants/SliderAboutUs.png'
import Ad5 from './../../asset/AdSliderTestImage2.png'
import SmallAd1 from './../../constants/SmallAd1BEWD.png'
import SmallAd2 from './../../constants/SmallAd2Laby.png'

function AdSlider(){
    const slides = [Ad1,Ad2,Ad3,Ad4,Ad5,]

    return(
        <>  
            <div className="AdSlider">
                <div className="AdSlider-Slider">
                    <ImageSlider slides={slides} />
                </div>
                <div className="AdSlider-Ads">
                    <div className="AdSlider-Ads-FirstAdElement">
                        <img src={SmallAd1} alt="chitnhau" />
                    </div>
                    <div className="AdSlider-Ads-SecondAdElement">
                        <img src={SmallAd2} alt="chitnhau" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdSlider