import { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router-dom";
import './../../styles/ImageSlider.css'

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function goToPrevious() {
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        event.preventDefault();
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        event.preventDefault();
    }, [currentIndex, slides])

    function goToSlide(slideIndex) {
        setCurrentIndex(slideIndex)
    }

    const timerRef = useRef(null)
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext()
        }, 3000)

        return () => clearTimeout(timerRef.current)
    }, [goToNext])

    return (
        <div className="Slider-Container">
            <div className="Slider-Container-LeftArrow" onClick={goToPrevious}>《</div>
            <div className="Slider-Container-RightArrow" onClick={goToNext}>》</div>
            <div className="Slider-pic-hidden">
                <div className="Slider-pic-container" style={{ width: 760 * slides.length, transform: `translateX(${-(currentIndex * 760)}px)` }}>
                    {slides.map((_, slideIndex) => (
                        <div className="Slider-pic" key={slideIndex}>
                            <Link to={slides[slideIndex].linkTo}><img src={slides[slideIndex].slide} alt="" /></Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Slider-Container-dotsParent">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} style={slideIndex == currentIndex ? {color: "white"}: {color: "gray"}}>•</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider