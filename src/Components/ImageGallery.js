// ImageGallery.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageGallery.css';


const ImageGallery = ({ images }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="gallery-container">
    <h2>explore our wide variety of wood</h2>
    <div className="image-gallery">
      {isMobile ? (
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.url} alt={image.name} />
              <div className="image-name">{image.name}</div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="image-row">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.url} alt={image.name} />
              <div className="image-name">{image.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  );
};

export default ImageGallery;
