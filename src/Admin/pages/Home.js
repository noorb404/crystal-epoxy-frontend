import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import Navbar from '../layout/Navbar';
import './Home.css';


export default function Home() {

    const [products,setProducts]=useState([]);


    useEffect(()=>{
        loadProducts();
    },[]);

    const loadProducts = async()=>{
        const result = await axios.get("https://crystal-epoxy-backend.herokuapp.com/products");
        setProducts(result.data);
        console.log(result.data);
    }

    const deleteProduct =async(id)=>{
        if (window.confirm("Are you sure you want to delete this product?")) {
            await axios.delete(`https://crystal-epoxy-backend.herokuapp.com/${id}`);
            loadProducts();
        }
    }

    return (
        <div className="container" style={{width:'100%', paddingBottom:'1000px'}}>
        <Navbar/>

            <div className='py-4'>
            <table className="table table-hover table-bordered shadow">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">width</th>
                    <th scope="col">height</th>
                    <th scope="col">length</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>(
                        <tr>
                            <th scope="row" key={index}>{product.id}</th>
                            <td><Image className='products__image_admin' cloudName='ddlf8wxvm' publicId={product.image}/></td>

                            <td>{product.name}</td>
                            <td>
                                <ul>
                                    {product.descriptions.map((description, idx) => (
                                    <li key={idx}>{description.description}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.width}</td>
                            <td>{product.height}</td>
                            <td>{product.length}</td>

                            <td>
                                <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger mx-2'>Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
                </table>
            </div>
        </div>
    )
}
