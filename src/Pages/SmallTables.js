import React from 'react';
import Item from '../Components/Item';
import './main.css';
import Hero from './Hero';
import CoffeTableBackGround from '../Images/CoffeBackGround.jpg';

const SmallTables = () => {
  return (
    <div>
        {/* Hero section */}
        <Hero 
        title="Unwind and entertain with our stunning coffee tables." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={CoffeTableBackGround} 
      />
        <div className="breadcrumb">
        <ul>
            <li><a className='home-link' href="/">Home</a></li>
            <li><span>/</span></li>
            <li>Coffee Tables</li>
        </ul>
        </div>
        <div className="tables__container">
        <Item category="Small Tables" />
        </div>
    </div>

  );
};

export default SmallTables;