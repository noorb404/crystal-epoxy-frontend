import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';
import background2 from '../Images/cnc_png.jpg';

const Cnc = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero 
        title="Transform your home with our precision-cut designs." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={background2} 
      />
      <div className="breadcrumb">
        <ul>
          <li><a className='home-link' href="/">Home</a></li>
          <li><span>/</span></li>
          <li>Cnc Designs</li>
        </ul>
      </div>
      <div className="tables__container">
        <Item category="Cnc" />
      </div>
    </div>
  );
};

export default Cnc;
