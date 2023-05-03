import React from 'react';
import "./main.css"
import Item from '../Components/Item';
import Hero from './Hero';


const Boards = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero 
        title="Elevate your dining experience with serving boards." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683124098/allproductscover_tfq5c4.png"} 
      />
      <div className="breadcrumb">
        <ul>
            <li><a className='home-link' href="/">Home</a></li>
            <li><span>/</span></li>
            <li>Serving Boards</li>
        </ul>
        </div>
      <div className="tables__container">
        <Item category="Serving Boards" />
      </div>
    </div>
  );
};

export default Boards;
