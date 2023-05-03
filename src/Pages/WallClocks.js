import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';

const WallClocks = () => {
  return (
    <div>
        {/* Hero section */}
        <Hero 
        title="Timeless style for every room, always on." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683124216/ClockBackGround_g8pegs.jpg"} 
      />
        <div className="breadcrumb">
        <ul>
            <li><a className='home-link' href="/">Home</a></li>
            <li><span>/</span></li>
            <li>Wall Clocks</li>
        </ul>
        </div>
        <div className="tables__container">
        <Item category="Wall Clocks" />
        </div>
    </div>

  );
};

export default WallClocks;