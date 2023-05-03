import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';

const Tables = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero 
        title="Maximize productivity in style with our tables." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683124379/KitchenTableBackGround_nllfk1.jpg"} 
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
