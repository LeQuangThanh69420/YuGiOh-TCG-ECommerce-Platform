import { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import './../../styles/AdSlider.css'
import {slides, Ad} from './../../constants/sliderPic'
import { Link } from 'react-router-dom'

function AdSlider(){


    return(
        <>  
            <div className="AdSlider">
                <div className="AdSlider-Slider">
                    <ImageSlider slides={slides} />
                </div>
                <div className="AdSlider-Ads">
                    <Link to={'/gacha'}>
                        <div className="AdSlider-Ads-AdElement">
                            <img src={Ad[0]} alt="chitnhau" />
                        </div>
                    </Link>
                    <Link to={'/gacha'}>
                        <div className="AdSlider-Ads-AdElement">
                            <img src={Ad[1]} alt="chitnhau" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AdSlider