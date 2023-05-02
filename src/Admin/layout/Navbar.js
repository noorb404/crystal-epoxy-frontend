import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ padding: '40px' }}>
        <div className="container">
          <Link to='/admin-coke-zero' className="navbar-brand" >
            Admin Page
          </Link>
          <Link to="addproduct" className="btn btn-outline-light">
            Add
          </Link>
        </div>
      </nav>
    </div>
  );
}
