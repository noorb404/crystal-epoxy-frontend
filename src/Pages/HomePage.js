// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

import woodTableLogo from '../Images/table.png';
import woodLogo from '../Images/wood.png';
import chemicalLogo from '../Images/test.png';
import mainBackground from '../Images/MainBackGround.jpg';
import eco from '../Images/save-the-world.png';
import colors from '../Images/pantone.png';
import woods from '../Images/woods.png';
import woodss from '../Images/rtee.jpg';
import resins from '../Images/resins.png';
import epoxy from '../Images/epoxy-resin-png.png';
import insta from '../Images/instapng.png';
import smallInsta from '../Images/smallInsta.png';


import shipping from '../Images/shipped.png';
import warranty from '../Images/guarantee.png';
import payment from '../Images/payment-method.png';

import { Box, Container } from "@mui/material";

import { useEffect } from 'react';
import Hero from '../Pages/Hero';
import { H1 } from "../Components/Typography";
import CategoryHomePage from '../Components/CategoryHomePage';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";



const HomePage = () => {

  const [tables, setTables] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  
  useEffect(() => {
    // Fetch tables from the API
    fetch('https://crystal-epoxy-backend.herokuapp.com/products/category/Tables')
      .then(response => response.json())
      .then(data => setTables(data.slice(0, 6))); // limit to 6 items
  
    // Fetch random products from the API
    fetch('https://crystal-epoxy-backend.herokuapp.com/products')
    .then(response => response.json())
    .then(data => {
      // Filter out products in the "Tables" category
      const nonTableProducts = data.filter(product => product.category !== "Tables");
      
      // Select 6 random products from the filtered array
      const randomData = [];
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * nonTableProducts.length);
        randomData.push(nonTableProducts[randomIndex]);
        nonTableProducts.splice(randomIndex, 1);
      }

      setRandomProducts(randomData);
    });
  }, []);
  return (
    <div className="container">

        {/* Hero section */}

        <Hero 
        title="Custom Epoxy Tables" 
        subtitle="Exquisite Craftsmanship for Your Home" 
        imageSrc={mainBackground} 
      />


        {/* Quality section */}
        <div className="quality-products" >
        <section className="quality" style={{padding:'50px',paddingBottom:'0px'}}>
            <div className="quality__item">
              <img src={woodTableLogo} alt="Wood Table Logo" className="quality__logo" />
              <h3 className="quality__title">CUSTOMIZED TABLES</h3>
              <p>We create beautiful, customized tables that cater to your unique preferences and requirements.</p>
            </div>
            <div className="quality__item">
              <img src={woodLogo} alt="Wood Logo" className="quality__logo" />
              <h3 className="quality__title">PRECIOUS WOODS</h3>
              <p>Our products are crafted from a selection of precious woods, ensuring both quality and durability.</p>
            </div>
            <div className="quality__item">
              <img src={chemicalLogo} alt="Chemical Logo" className="quality__logo" />
              <h3 className="quality__title">PREMIUM RESIN</h3>
              <p>We use only the finest quality resin to create stunning and long-lasting epoxy tables and products.</p>
            </div>
          </section>
        </div>


        {/* SHOP BY CATEGORY section */}

        <Container style={{alignContent:'center' , justifyContent:'center',display:'flex',paddingTop:'70px'}}>
        </Container>
          <Container style={{alignContent:'center' , justifyContent:'center',display:'flex',paddingBottom:'50px', marginTop:'-20px'}}>
          <H1>SHOP BY CATEGORY</H1>
            </Container>
            <Container style={{paddingBottom:'40px'}} >
              <Box className="pageContent" >
                    <CategoryHomePage />
              </Box>
        </Container>

        <div className='separator'></div>


        {/* Quality section */}
        <div className="quality-products2" >

          <section className="quality" style={{padding:'50px',paddingBottom:'0px'}}>
            <div className="quality__item">
              <img src={colors} alt="Wood Table Logo" className="quality__logo" />
              <h3 className="quality__title">RESIN COLOR</h3>
              <p>The resin can be colored with dyes or pigments to obtain effects of different shades of color and transparency</p>
            </div>
            <div className="quality__item">
              <img src={woods} alt="Wood Logo" className="quality__logo" />
              <h3 className="quality__title">WOOD FINISH</h3>
              <p>We treat our woods with oil/wax finishes, which protect the top and give it an authentic colour, accentuating the natural grain</p>
            </div>
            <div className="quality__item">
              <img src={eco} alt="Chemical Logo" className="quality__logo" />
              <h3 className="quality__title">ECO PHILOSOPHY</h3>
              <p>We will help you give new life to your old furniture by restoring it with epoxy resin</p>
            </div>
          </section>
        </div>
        

      {/* Products section */}
      <section className="products">
        {/* Tables */}
        <div className='separator'></div>

        <div className="products__category">
          <h2 className="products__headline">THE MOST DESIRED TABLES</h2>
          <h2 className="products__headline__smaller">Choose from a wide range of models the one that best suits you.</h2>

          <div className="products__grid">
          {tables.map(product => (
            product && (
              <div className="products__item" key={product.id}>
              <a key={product.id}  className="products__item custom-a" href={`/product/${product.id}`}>
                <Image className='products__image' cloudName='ddlf8wxvm' publicId={product.image}/>
                <p className="products__item-description">{product.name}</p>
                <p className="products__item-description-price">{product.price}₪</p> 
                <p className="products__item-price">{product.price}₪</p>
                </a>
              </div>
            )))}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/kitchen-office-tables" className="show-all-btn" style={{ display: 'inline-block' }}>Show All Tables <FaArrowRight style={{ paddingTop: "5px" }} /></Link>
        </div>  
          <div className='separator'></div>
             

        <Hero 
        title="Our Finest Collection of Wood" 
        subtitle="Oak, Walnut, Cherry, Maple, Pine, Olive ,Eucalyptus" 
        imageSrc={woodss} 
      />


            
        {/* Quality section */}
        <div className="quality-products2" >

        <section className="quality" style={{padding:'50px',paddingBottom:'0px'}}>
          <div className="quality__item">
            <img src={warranty} alt="Wood Table Logo" className="quality__logo" />
            <h3 className="quality__title">Warranty and Returns</h3>
            <p>Each table has a 2-year manufacturer's warranty, and if you are not satisfied you can return it within 2 weeks of delivery.</p>
          </div>
          <div className="quality__item">
            <img src={payment} alt="Wood Logo" className="quality__logo" />
            <h3 className="quality__title">Payment methods</h3>
            <p>Pay the order in any way convenient for you: Cash on delivery, Bank transfer</p>
          </div>
          <div className="quality__item">
            <img src={shipping} alt="Chemical Logo" className="quality__logo" />
            <h3 className="quality__title">Shipping Method</h3>
            <p>Please note that delivery takes 3-5 business days after production of the product is completed</p>
          </div>
        </section>
        </div>

        
      <div className="insta-section">
        <picture>
          <source media="(max-width: 767px)" srcSet={smallInsta} />
          <img src={insta} alt="Instagram preview" className="insta-image" />
        </picture>
        <div className="insta-headline">
          <h2>Follow us</h2>
          <h1>On Instagram!</h1>
          <a
            href="https://www.instagram.com/crystal.wood_epoxydesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-us-link"
            style={{ color: "#f7f7f4", padding: "10px" }}
          >
            @CRYSTAL.WOOD_EPOXYDESIGN<FaArrowRight style={{ marginLeft:'7px',paddingTop: "5px" }} />
          </a>
        </div>
      </div>
      <div className='separator'></div>


        <div className="products__category">
        <h2 className="products__headline">FEATURED PRODUCTS</h2>
        <h2 className="products__headline__smaller">Choose from a wide range of products the one that best suits you.</h2>

        <div className="products__grid">
        {randomProducts.map(product => (
          product && (
            <div className="products__item" key={product.id}>
              <a key={product.id}  className="products__item custom-a" href={`/product/${product.id}`}>
                <Image className='products__image' cloudName='ddlf8wxvm' publicId={product.image}/>
                <p className="products__item-description">{product.name}</p>
                <p className="products__item-description-price">{product.price}₪</p> 
                <p className="products__item-price">{product.price}₪</p>
            </a>

            </div>
          )))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/products" className="show-all-btn" style={{ display: 'inline-block' }}>Show All Products <FaArrowRight style={{ paddingTop: "5px" }} /></Link>
        </div>  
      </div>


      </section>
        <section className="epoxy-resin">
          <div className="epoxy-resin__container">
            <div className="epoxy-resin__text">
              <h2 className="epoxy-resin__heading">What You Need to Know about Epoxy Resin</h2>
              <h3 className="epoxy-resin__subheading">Our Unique Epoxy Resin Tables </h3>
              <p style={{textAlign:'left'}}>Our colorful epoxy is not only aesthetically pleasing, but also a durable and practical solution for enhancing the lifespan of your furniture. By adding pigments of different colors, we create unique and vivid patterns on the surface of the epoxy resin, which can complement any interior design. The epoxy resin also provides a strong and protective layer that shields the wood from scratches, moisture, and other external factors. Our team only uses certified and food-safe epoxy resin, ensuring the safety of our customers and their families. With our high-quality colorful epoxy, you can add a touch of artistry and practicality to your furniture, all while ensuring it stays in great condition for years to come.</p>
            </div>
            <img src={resins} alt="Epoxy resin table" className="epoxy-resin__image" />
          </div>
        </section>

        <section className="epoxy-resin flipped">
        <div className="epoxy-resin__container">
          <img src={epoxy} alt="Safe epoxy resin" className="epoxy-resin__image" />
          <div className="epoxy-resin__text">
            <h2 className="epoxy-resin__heading">Safe Epoxy Resin</h2>
            <h3 className="epoxy-resin__subheading">All you need to know about the safety of using our product</h3>
            <p style={{textAlign:'left'}}>Epoxy resin is often used in applications where it comes into contact with food or human skin, such as in kitchen countertops or jewelry. At Crystal Epoxy, we understand the importance of using only safe and non-toxic materials. That's why we only use certified and food-safe epoxy resin in all of our products. Our epoxy resin is free from harmful substances such as BPA, VOCs, and solvents, ensuring that your health is never compromised. With Crystal Epoxy's safe epoxy resin, you can enjoy beautiful and functional furniture without any worries.</p>
          </div>
        </div>
      </section>


      </div>
    );
};

export default HomePage;
