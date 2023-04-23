import React, { useState, useEffect } from "react";
import "./style.css";

const Carrucel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='carousel'>
      <div className='carousel-container'>
        <div className='theater-bg'>
          <div className='theater-bg__lights'></div>
          <div className='theater-bg__curtain'></div>
        </div>
        <div className='carousel'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel__slide ${
                index === currentIndex ? "carousel__slide--active" : ""
              }`}
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
          ))}
          <button
            className='carousel__btn carousel__btn--prev'
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className='carousel__btn carousel__btn--next'
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrucel;
