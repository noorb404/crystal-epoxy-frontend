import React, { useEffect, useState } from 'react';
import './main.css';
import Hero from './Hero';
import background from '../Images/allproductscover.png';
import { Image } from 'cloudinary-react';
import axios from 'axios';

export const AllProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async() => {
        const result = await axios.get(`http://localhost:8080/products`);

        setProducts(result.data);
        console.log(result.data);
    }

    return (
        <div>
          {/* Hero section */}
          <Hero 
            title="Elevate your space with our stunning products." 
            subtitle="Indulge in one-of-a-kind, handcrafted pieces" 
            imageSrc={background} 
          />
          <div className="breadcrumb">
            <ul>
              <li><a className='home-link' href="/">Home</a></li>
              <li><span>/</span></li>
              <li>All Products</li>
            </ul>
          </div>
          <div className="tables__container">
            <section className="products">
                {/* Tables */}
                <div className="products__category">
                    <div className="products__grid">
                        {/* Table Items */}
                        {products.map((product, index) => (
                            <a key={product.id}  className="products__item custom-a" href={`/product/${product.id}`}>
                                <Image className='products__image' cloudName='ddlf8wxvm' publicId={product.image}/>
                                <div className="products__item-info">
                                    <p className="products__item-description">{product.name}</p>
                                    <p className="products__item-description-price">{product.price}₪</p> 
                                    <p className="products__item-price">{product.price}₪</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
          </div>
        </div>
    );
};
