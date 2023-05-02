import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';
import background from '../Images/KitchenTableBackGround.jpg';

const Tables = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero 
        title="Maximize productivity in style with our tables." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={background} 
      />
      <div className="breadcrumb">
        <ul>
          <li><a className='home-link' href="/">Home</a></li>
          <li><span>/</span></li>
          <li>Tables</li>
        </ul>
      </div>
      <div className="tables__container">
        <Item category="Tables" />
      </div>
    </div>
  );
};

export default Tables;
