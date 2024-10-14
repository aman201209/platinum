import React, { useState, useEffect } from 'react';
import './Slider.css';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
const images = [
  'https://alphasilver.productsalphawizz.com/uploads/media/2024/7mdfskoasdhgoihgio047805.png',
  'https://alphasilver.productsalphawizz.com/uploads/media/2024/847497sdgiuashdgihasio8.jpg',
  "https://alphasilver.productsalphawizz.com/uploads/media/2024/bannar.jpg"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="btn left" onClick={prevSlide}>
        <ArrowBackIosSharpIcon/>
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="btn right" onClick={nextSlide}>
        <ArrowForwardIosSharpIcon/>
      </button>
    </div>
  );
};

export default Slider;
