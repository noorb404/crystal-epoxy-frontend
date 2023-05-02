import React, { useEffect, useState } from 'react';
import './ItemPage.css';
import { useParams } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import heightLogo from '../Images/height.png';
import widthLogo from '../Images/width.png';
import lengthLogo from '../Images/length.png';
import One from '../Images/one.png';
import Leaf from '../Images/leaf.png';
import Star from '../Images/star.png';
import {FaWhatsapp } from 'react-icons/fa';
import checked from '../Images/check-mark.png';

const ItemPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [dimensions, setDimensions] = useState({
    price: 0,
    width: 1,
    height: 1,
    length: 1,
  });
  useEffect(() => {
    // Replace this with your actual fetch function to get product details
    const fetchProduct = async () => {
      const response = await fetch(`https://crystal-epoxy-backend.herokuapp.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setDimensions({ ...dimensions, price: data.price });
    };

    fetchProduct();
  }, [id, dimensions]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, image, descriptions } = product;
  const { width, height, length, price } = dimensions;
  const totalPrice = Math.round(price * width * height * length);

  const handleWidthChange = (e) => {
    const selectedWidth = parseFloat(e.target.value);
    const updatedDimensions = {
      ...dimensions,
      width: selectedWidth,
    };
    setDimensions(updatedDimensions);
  };


  return (

    <div className="item-page">

      <div className="left-side">
      <Image cloudName='ddlf8wxvm' publicId={image}/>
      </div>
      <div className="right-side">
        <h1 className='myh1'>{name}</h1>

        <div className="specifications">
          <div className="specification-item2" style={{paddingRight:'10px'}}>
            <img src={One} alt="Height"  />
            <p className="generic-description">1 of 1 Piece</p>
          </div>
          <div className="specification-item2" style={{paddingRight:'10px'}}>
            <img src={Leaf} alt="Length"  />
            <p className="generic-description">Valuable wood</p>
          </div>
          <div className="specification-item2" >
            <img src={Star} alt="Width" />
            <p className="generic-description">Premium class</p>
          </div>
        </div>

        <hr />
        {descriptions && descriptions.map((item, index) => (
            <div key={index} className="specification-item2">
              <img src={checked} alt="Width" />
              <div className="product-description">{item.description}</div>
            </div>
          ))}
        <hr />
        <div className="specifications">
          <h4 className="text-center">Default size</h4>
          <div className="specification-item" style={{paddingRight:'10px'}}>
            <img src={heightLogo} alt="Height"  />
            <p className="generic-description">Height: {product.height} cm</p>
          </div>
          <div className="specification-item" style={{paddingRight:'10px'}}>
            <img src={lengthLogo} alt="Length"  />
            <p className="generic-description">Length: {product.length} cm</p>
          </div>
          <div className="specification-item" >
            <img src={widthLogo} alt="Width" />
            <p className="generic-description">Width: {product.width} cm</p>
          </div>
        </div>
        
        <hr />
        <div className="specifications" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="product-price" style={{ marginRight: '20px' }}>from <span className="price-number">{totalPrice}₪</span></div>
        <div className="specification-item" style={{ display: 'flex', alignItems: 'center' }}>
          {product.category==='Tables' || product.category==='Small Tables' ? <div className="dimension-container">
            <select className="dimension-select" value={width} onChange={handleWidthChange}>
              <option disabled defaultValue value={1}> Select Size </option>
              <option value={1.000001}>{product.category==='Tables'? '70x120x75cm' : '40x40x45cm'}</option>
              <option value={1.2}>{product.category==='Tables'? '70x160x75cm' : '60x60x45cm'}</option>
              <option value={1.4}>{product.category==='Tables'? '70x180x75cm' : '70x70x45cm'}</option>
              <option value={1.6}>{product.category==='Tables'? '100x200x75cm' : '80x80x45cm'}</option>
              <option value={1.8}>{product.category==='Tables'? '100x240x75cm' : '70x100x45cm'}</option>
              <option value={2}>{product.category==='Tables'? '100x300x75cm' : '80x120x45cm'}</option>
            </select>
          </div>: null}
        </div>
      </div>


        <a href="https://wa.link/s6o3sg" style={{textDecoration:'none',maxWidth:'200px', fontFamily:'system-ui' ,fontWeight:'600'}} className="navbar__whatsapp buy-button"><FaWhatsapp className="navbar__icon" />Contact us via WhatsApp</a>
        <p className="product-production-time">Production time: <span className="product-production-time" style={{fontWeight:'700'}}>2-5 weeks</span></p>
      </div>
    </div>

  );
};

export default ItemPage;
