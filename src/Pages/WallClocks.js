import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';
import ClockBackGround from '../Images/ClockBackGround.jpg';

const WallClocks = () => {
  return (
    <div>
        {/* Hero section */}
        <Hero 
        title="Timeless style for every room, always on." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={ClockBackGround} 
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