import axios from 'axios';
import './Item.css';

import React, { useEffect, useState } from 'react'

import {Image} from 'cloudinary-react';


export default function Item(props) {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        loadProducts();
    },[]);

    const loadProducts = async() => {
        const result = await axios.get(`https://crystal-epoxy-backend.herokuapp.com/products/category/${props.category}`);
        console.log(props.category);

        setProducts(result.data);
        console.log(result.data);
    }

    return (
        <section className="products">
            {/* Tables */}
            <div className="products__category">
                <div className="products__grid">
                    {/* Table Items */}
                    {products.length === 0 ?
                        <div className="no-products">Coming soon!</div>
                        :
                        products.map((product, index) => (
                            <a key={product.id}  className="products__item custom-a" href={`/product/${product.id}`}>
                                <Image className='products__image' cloudName='ddlf8wxvm' publicId={product.image}/>
                                <div className="products__item-info">
                                    <p className="products__item-description">{product.name}</p>
                                    <p className="products__item-description-price">{product.price}₪</p> 
                                    <p className="products__item-price">{product.price}₪</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
                {products.length === 0 &&
                    <style jsx>{`
                        .no-products {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 24px;
                            font-weight: bold;
                            color: #999;
                            margin-top: 50px;
                        }
                    `}</style>
                }
            </div>
        </section>
    )
}
