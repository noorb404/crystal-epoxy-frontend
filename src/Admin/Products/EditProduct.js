import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {

    let navigate=useNavigate();
    const {id}=useParams();
    const [product,setProduct] = useState({
        name:"",
        description:"",
        size:"",
        price:"",
        category:""
    });

    const {name,description,size,price,category}=product;

    const onInputChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadProduct();
    })

    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`https://crystal-epoxy-backend.herokuapp.com/${id}`,product);
        navigate("/");
    }

    const loadProduct = async()=>{
        const result=await axios.get(`https://crystal-epoxy-backend.herokuapp.com/products/${id}`);
        setProduct(result.data);
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
            <h2 className='text-center m-4'> Edit Product</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Product Name</label>
                        <input type="text" onChange={(e)=>onInputChange(e)} value={name} placeholder='Enter Product Name' className="form-control" id="name" name="name"></input>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Product description</label>
                        <input type="text" onChange={(e)=>onInputChange(e)} value={description}  placeholder='Enter Product description' className="form-control" id="description" name="description"></input>
                    </div>
                    <div className="mb-3">
                        <label for="size" className="form-label">Product size</label>
                        <input type="text" onChange={(e)=>onInputChange(e)} value={size}  placeholder='Enter Product size' className="form-control" id="size" name="size"></input>
                    </div>
                    <div className="mb-3">
                        <label for="price" className="form-label">Product price</label>
                        <input type="text" onChange={(e)=>onInputChange(e)} value={price}  placeholder='Enter Product price' className="form-control" id="price" name="price"></input>
                    </div>
                    <div className="mb-3">
                        <label for="category" className="form-label">Product category</label>
                        <input type="text" onChange={(e)=>onInputChange(e)} value={category} placeholder='Enter Product category' className="form-control" id="category" name="category"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-outline-danger mx-2">cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
