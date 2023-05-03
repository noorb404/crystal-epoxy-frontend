import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';

const Wood = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero 
        title="Bring nature into your space with our wood slabs." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683124465/woodslabs_dznc89.jpg"} 
      />
      <div className="breadcrumb">
        <ul>
          <li><a className='home-link' href="/">Home</a></li>
          <li><span>/</span></li>
          <li>Wood</li>
        </ul>
      </div>
      <div className="tables__container">
        <Item category="Wood" />
      </div>
    </div>
  );
};

export default Wood;
