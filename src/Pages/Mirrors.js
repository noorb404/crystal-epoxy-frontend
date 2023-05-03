import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';

const Mirrors = () => {
  return (
    <div>
        {/* Hero section */}
        <Hero 
        title="Reflect your unique style with our mirrors." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683124321/mirrorBackground_pi0xcd.jpg"} 
      />
        <div className="breadcrumb">
        <ul>
            <li><a className='home-link' href="/">Home</a></li>
            <li><span>/</span></li>
            <li>Mirrors</li>
        </ul>
        </div>
        <div className="tables__container">
        <Item category="Mirrors" />
        </div>
    </div>

  );
};

export default Mirrors;