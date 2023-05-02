import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, imageSrc }) => {
  return (
    <div>
      {/* Hero section */}
      <section className="hero" style={{backgroundImage: `url(${title==='Custom Epoxy Tables'?"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683033003/MainBackGround_kvo3qh.jpg":title==='Our Finest Collection of Wood'?"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683033206/rtee_lvbmsh.jpg":imageSrc})`, backgroundAttachment: 'fixed'}}>
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <h2 className="hero__subtitle">{subtitle}</h2>
        </div>
      </section>
    </div>
  );
};

export default Hero;