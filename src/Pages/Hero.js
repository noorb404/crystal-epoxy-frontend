import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, imageSrc }) => {
  return (
    <div>
      {/* Hero section */}
      <section className="hero" style={{backgroundImage: `url(${imageSrc})`}}>

        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <h2 className="hero__subtitle">{subtitle}</h2>
        </div>
      </section>
    </div>
  );
};

export default Hero;