import { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import './../../styles/AdSlider.css'
import {slides, Ad} from './../../constants/sliderPic'


function AdSlider(){


    return(
        <>  
            <div className="AdSlider">
                <div className="AdSlider-Slider">
                    <ImageSlider slides={slides} />
                </div>
                <div className="AdSlider-Ads">
                    <div className="AdSlider-Ads-AdElement">
                        <img src={Ad[0]} alt="chitnhau" />
                    </div>
                    <div className="AdSlider-Ads-AdElement">
                        <img src={Ad[1]} alt="chitnhau" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdSlider