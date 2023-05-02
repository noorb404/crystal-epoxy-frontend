import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ padding: '40px' }}>
        <div className="container">
          <p className="navbar-brand" >
            Crystal Epoxy Admin Page
          </p>
          <Link to="addproduct" className="btn btn-outline-light">
            Add Product
          </Link>
        </div>
      </nav>
    </div>
  );
}
