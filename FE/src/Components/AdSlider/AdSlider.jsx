import { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import './../../styles/AdSlider.css'
import AdTest1 from './../../asset/AdSliderTestImage1.png'
import AdTest2 from './../../asset/AdSliderTestImage2.png'
import AdTest3 from './../../asset/AdSliderTestImage.png'
import AdTest4 from './../../asset/AdSliderTestImage1.png'
import AdTest5 from './../../asset/AdSliderTestImage2.png'
import AdsTest from './../../asset/AdSliderSideAdsTestImage.png'

function AdSlider(){
    const slides = [AdTest1,AdTest2,AdTest3,AdTest4,AdTest5,]

    return(
        <>  
            <div className="AdSlider">
                <div className="AdSlider-Slider">
                    <ImageSlider slides={slides}/>
                </div>
                <div className="AdSlider-Ads">
                    <div className="AdSlider-Ads-FirstAdElement">
                        <img src={AdsTest} alt="chitnhau" />
                    </div>
                    <div className="AdSlider-Ads-SecondAdElement">
                        <img src={AdsTest} alt="chitnhau" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdSlider