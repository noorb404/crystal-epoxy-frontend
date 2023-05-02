import React from 'react';
import "./main.css"
import Item from '../Components/Item';
import Hero from './Hero';
import BoardsBackground from '../Images/BoardsBackground.jpg';


const Boards = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero 
        title="Elevate your dining experience with serving boards." 
        subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
        imageSrc={BoardsBackground} 
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
