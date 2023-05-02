import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SlidingCategories.css';

const SlidingCategories = () => {
  const [categories] = useState([
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Tables", link: "/tables" },
    { id: 3, title: "Contact Us", link: "/contact" },
    { id: 5, title: "More Products", link: "#" },
  ]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="sliding-categories">
      <div className="sliding-categories__wrapper">
        {categories.map(category => (
          <Link
            key={category.id}
            className={`sliding-categories__item ${selectedCategoryId === category.id ? 'active' : ''} sliding-categories__link`}
            to={category.link}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlidingCategories;
