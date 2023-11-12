import { useState, useEffect } from "react";
import './../../styles/ImageSlider.css'

function ImageSlider({slides}){
    const [currentIndex, setCurrentIndex] = useState(0)

    function goToPrevious(){
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    function goToNext(){
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return(
        <div className="Slider-Container">
            <div className="Slider-Container-LeftArrow" onClick={goToPrevious}>《</div>
            <div className="Slider-Container-RightArrow" onClick={goToNext}>》</div>
            <img src={slides[currentIndex]} alt="chitr" />
            <div className="Slider-Container-dotsParent">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex}>•</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider