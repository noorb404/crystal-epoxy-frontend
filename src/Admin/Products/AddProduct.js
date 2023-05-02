import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './AddProduct.css';
import Navbar from '../layout/Navbar';


export default function AddProduct() {


    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [length, setLength] = useState("");
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [descriptionList, setDescriptionList] = useState([]);
  
    const [newDescription, setNewDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageUploaded, setImageUploaded] = useState(false);
    const [finalProduct, setFinalProduct] = useState({
        name: '',
        descriptions: [],
        width:'',
        height:'',
        length:'',
        price: '',
        category: '',
        image: '',
      });

      const categories = ["Tables", "Small Tables", "Shelves","Mirrors","Serving Boards", "Wall Clocks", "Wood","Cnc"];


      async function onInputChangeImage(e) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "xgpstnd9");
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/ddlf8wxvm/image/upload`,
          formData
        );
        if (response && response.data) {
          const newProduct = {
            name: name,
            descriptions: descriptionList,
            width: width,
            height: height,
            length: length,
            price: price,
            category: category,
            image: response.data.public_id,
          };
          setFinalProduct(newProduct);
          setImageUploaded(true);
        }
      }
  

      const handleAddDescription = () => {
        if (newDescription) {
          const updatedDescriptionList = [...descriptionList, newDescription];
          setDescriptionList(updatedDescriptionList);
          setFinalProduct(prevFinalProduct => ({
            ...prevFinalProduct,
            description: [...updatedDescriptionList],
          }));
          setNewDescription('');
        }
      };
      
      const handleRemoveDescription = (index) => {
        setDescriptionList((prevDescriptionList) =>
          prevDescriptionList.filter((description, i) => i !== index)
        );
        setFinalProduct((prevFinalProduct) => ({
          ...prevFinalProduct,
          description: prevFinalProduct.description.filter(
            (description, i) => i !== index
          ),
        }));
      };
      
    const onSubmit = async (e) => {
        e.preventDefault();


        if (!imageUploaded) {
            console.log('Please upload an image before submitting.');
            alert('Loading Image ... Please try again after a while , if you didnt upload image please do.');
            return;
        }
        const regex = /^\d*$/;
        if (
          !regex.test(price) ||
          !regex.test(width) ||
          !regex.test(height) ||
          !regex.test(length)
        ) {
          alert("Price, width, height, and length must only contain numbers.");
          return;
        }
        console.log(JSON.stringify(finalProduct));

        await axios.post("https://crystal-epoxy-backend.herokuapp.com/products/add", finalProduct);
        navigate("/admin-coke-zero");
    }

  return (
    <div>
        <Navbar/>

    <div className="container inner-cont" style={{ paddingBottom:'140px'}}>
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
        <h2 className="text-center m-4">Add Product</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Product Name"
              className="form-control"
              id="name"
              name="name"
            ></input>
          </div>
          <div className="mb-3">
                    <label htmlFor="add-description" className="form-label">Add description:</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" onChange={(e) => setNewDescription(e.target.value)} value={newDescription} placeholder='Enter new description' className="form-control" id="add-description" name="add-description" style={{ marginRight: '10px' }}></input>
                        <button type="button" className="custon-btn" onClick={handleAddDescription}>Add</button>
                    </div>
                </div>
                {descriptionList.length > 0 &&
                    <div className="mb-3">
                        <label className="form-label">Added descriptions:</label>
                        <ul>
                            {descriptionList.map((description, index) => (
                                <li key={index}>{description} <button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveDescription(index)}>X</button></li>
                            ))}
                        </ul>
                    </div>
                }
          <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="width" className="form-label">
              Width
            </label>
            <input
              type="text"
              pattern="\d*"
              title="Only numbers are allowed."
              onChange={(e) => setWidth(e.target.value)}
              value={width}
              placeholder="Enter width"
              className="form-control"
              id="width"
              name="width"
            ></input>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="height" className="form-label">
              Height
            </label>
            <input
              type="text"
              pattern="\d*"
              title="Only numbers are allowed."
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              placeholder="Enter height"
              className="form-control"
              id="height"
              name="height"
            ></input>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="length" className="form-label">
              Length
            </label>
            <input
              type="text"
              pattern="\d*"
              title="Only numbers are allowed."
              onChange={(e) => setLength(e.target.value)}
              value={length}
              placeholder="Enter length"
              className="form-control"
              id="length"
              name="length"
            ></input>
          </div>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product price
            </label>
            <input
              type="text"
              pattern="\d*"
              title="Only numbers are allowed."
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Enter Product price"
              className="form-control"
              id="price"
              name="price"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Product category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
              id="category"
              name="category"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

                <div className="mb-3">
                    <input onChange={(e)=>onInputChangeImage(e)} style={{maxWidth:'300px' , border:0, height:'50px'}}   name='image' type='file' />
                </div>
                <div className='btn-contain'>
                    <button type="submit" className="custon-btn">Submit</button>
                    <Link to="/admin-secret" style={{textDecoration:'none'}} className="custon-btn-danger">cancel</Link>
                </div>

            </form>
        </div>
        </div>
    </div>
    </div>

  )
}
