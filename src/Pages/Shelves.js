import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';

const Shelves = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero 
        title="Elevate your space with our stylish shelves." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683124417/shelv_snhr92.png"} 
      />
      <div className="breadcrumb">
        <ul>
          <li><a className='home-link' href="/">Home</a></li>
          <li><span>/</span></li>
          <li>Shelves</li>
        </ul>
      </div>
      <div className="tables__container">
        <Item category="Shelves" />
      </div>
    </div>
  );
};

export default Shelves;
