import { ButtonBase } from '@mui/material';
import Image4 from '../Images/coffee png.png';
import Image1 from '../Images/kitchen tables.png';
import Image3 from '../Images/serving board png.png';
import Image2 from '../Images/wall clock png.png';
import Image5 from '../Images/mirror png.png';
import Image6 from '../Images/All Products.png';
import Image7 from '../Images/cnc png.png';
import Image8 from '../Images/shelves png.png';
import Image9 from '../Images/wood png.png';
import './index.css'
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const images = [  { id: 1, src: Image1, text: "", to: '/kitchen-office-tables' }, 
                  { id: 2, src: Image3, text: "", to: '/boards' },
                  { id: 3, src: Image2, text: "", to: '/clocks' },
                  { id: 4, src: Image4, text: "", to: '/coffee-tables' },  
                  { id: 5, src: Image5, text: "", to: '/mirrors' },  
                  { id: 6, src: Image8, text: "", to: '/shelves' },  
                  { id: 7, src: Image7, text: "", to: '/cnc' },  
                  { id: 8, src: Image9, text: "", to: '/wood' },  
                  { id: 9, src: Image6, text: "All Products", to: '/products' },];

const CategoryHomePage = () => {
  const [numCategories, setNumCategories] = useState(5);

  const handleShowMore = () => {
    setNumCategories(images.length);
  };

  const displayedImages = images.slice(0, numCategories);
  return (
    <>
    <div className="grid-container">
      {displayedImages.map((image, index) => (
        <div key={image.id} className={`grid-item grid-item-${index + 1}`}>
          <Link to={image.to} className="button-container">
            <ButtonBase className="image-button" style={{ width: "100%" }}>
              <Image src={image.src} alt={`Image ${image.id}`} className="image-size" />
              <div className="overlay">
                <div className="text">{image.text}</div>
              </div>
            </ButtonBase>
          </Link>
        </div>
      ))}
    </div>
    {numCategories < images.length && (
             <div style={{ textAlign: 'center' ,paddingTop:'20px'}}>
             <Link onClick={handleShowMore} className="show-all-btn" style={{ display: 'inline-block' }}>Show All Categories</Link>
           </div> 

)}



</>
  );
};

export default CategoryHomePage;