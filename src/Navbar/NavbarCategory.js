import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../Images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import './NavbarCategory.css';
import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Collapse, Grid } from '@mui/material';



const NavbarCategory = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);


  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      handleMobileMenuClose();
    } else {
      handleMobileMenu();
    }
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenu = (event) => {
    setMobileMenuOpen(true);
  };
  
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const Brand = () => {
    return (
        <Link className="brand" to='/' style={{ textDecoration:'none' , color:'black', display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" className="brand-logo" />
        <Typography  className="brand-name" style={{fontWeight:'700',fontFamily: 'system-ui'}}>CRYSTAL EPOXY</Typography>
      </Link>
    );
  };

  const MobileMenuPopover = () => (
    <Collapse in={mobileMenuOpen} style={{ width: '100%', position: 'relative' }}>
  <div className="mobile-menu">
    <Typography variant="h6" className="nav-link">
      <Link to="/" className="nav-link-text-drop" onClick={handleMobileMenuClose} style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}>
        HOME
      </Link>
    </Typography>
    <hr />
    <Typography
      variant="h6"
      className="nav-link"
      onClick={() => setShowProductsMenu(!showProductsMenu)}
      style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}
    >
      PRODUCTS
      <ExpandMoreIcon  style={{paddingTop:'10px'}}/>
    </Typography>
    <hr />
    <Collapse in={showProductsMenu}>
      <div className="mobile-sub-menu">
        <Typography variant="h6" className="nav-link">
          <Link
            to="/kitchen-office-tables"
            className="nav-link-text-drop"
            onClick={handleMobileMenuClose}
            style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}
          >
            KITCHEN & OFFICE TABLES
          </Link>
        </Typography>
        <hr />
        <Typography variant="h6" className="nav-link">
          <Link
            to="/coffee-tables"
            className="nav-link-text-drop"
            onClick={handleMobileMenuClose}
            style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}
          >
            COFFEE TABLES
          </Link>
        </Typography>
        <hr />
        <Typography variant="h6" className="nav-link">
          <Link
            to="/boards"
            className="nav-link-text-drop"
            onClick={handleMobileMenuClose}
            style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}
          >
            SERVING BOARDS
          </Link>
        </Typography>
        <hr />
        <Typography variant="h6" className="nav-link">
          <Link
            to="/mirrors"
            className="nav-link-text-drop"
            onClick={handleMobileMenuClose}
            style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}
          >
            MIRRORS
          </Link>
        </Typography>
        <hr />
        <Typography variant="h6" className="nav-link">
          <Link
            to="/clocks"
            className="nav-link-text-drop"
            onClick={handleMobileMenuClose}
            style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}
          >
            WALL CLOCKS
          </Link>
        </Typography>
        <hr />
      </div>
    </Collapse>
    <Typography variant="h6" className="nav-link">
      <Link to="/cnc" className="nav-link-text-drop" onClick={handleMobileMenuClose} style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}>
        CNC DESIGN
      </Link>
    </Typography>
    <hr />
    <Typography variant="h6" className="nav-link">
      <Link to="/wood" className="nav-link-text-drop" onClick={handleMobileMenuClose} style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}>
        WOOD FOR SALE
      </Link>
    </Typography>

    <hr />
    <Typography variant="h6" className="nav-link">
      <Link
        to="/aboutus"
        className="nav-link-text-drop"
        onClick={handleMobileMenuClose}
        style={{fontFamily: 'system-ui' ,fontSize:'1rem'}}
      >
        ABOUT US
      </Link>
    </Typography>
  </div>
</Collapse>

   
  );

  return (
<div >
    <Grid container direction="column">
      <Grid item>
        <AppBar position="static" color="default" className="appbar">
          <Toolbar className="toolbar custom-toolbar">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Brand />
              <div className="mobile-menu-button">
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleMobileMenu}>
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
            <div  className="desktop-link">

            <Typography variant="h6" className="nav-link desktop-link">
            <Link to="/" style={{fontFamily: 'system-ui' ,fontSize:'1rem'}} className="nav-link-text">
              HOME
            </Link>

          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu} className="products-button">
            <Typography variant="h6" style={{fontFamily: 'system-ui' ,fontSize:'1rem'}} className="button-text">
              PRODUCTS
            </Typography>
            <ExpandMoreIcon className="button-icon" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="dropdown-menu"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            getContentAnchorEl={null}
          >

            <MenuItem onClick={handleClose} component={Link} to="/products" className="dropdown-item">
              <Typography variant="h6">All Products</Typography>
            </MenuItem>
            <hr/>

            <MenuItem onClick={handleClose} component={Link} to="/kitchen-office-tables" className="dropdown-item">
              <Typography variant="h6">Kitchen & Office Tables</Typography>
            </MenuItem>
            <hr/>
            <MenuItem onClick={handleClose} component={Link} to="/coffee-tables" className="dropdown-item">
              <Typography variant="h6">Coffe Tables</Typography>
            </MenuItem>
            <hr/>

            <MenuItem onClick={handleClose} component={Link} to="/boards" className="dropdown-item">
              <Typography variant="h6">Serving Boards</Typography>
            </MenuItem>
            <hr/>

            <MenuItem onClick={handleClose} component={Link} to="/mirrors" className="dropdown-item">
              <Typography variant="h6">Mirrors</Typography>
            </MenuItem>
            <hr/>

            <MenuItem onClick={handleClose} component={Link} to="/clocks" className="dropdown-item">
              <Typography variant="h6">Wall Clocks</Typography>
            </MenuItem>
            <hr/>
            
            <MenuItem onClick={handleClose} component={Link} to="/shelves" className="dropdown-item">
              <Typography variant="h6">Shelves</Typography>
            </MenuItem>
          </Menu>
          </div>
                    
          <Typography variant="h6" className="nav-link desktop-link">
          <Link to="/cnc" style={{fontFamily: 'system-ui' ,fontSize:'1rem'}} className="nav-link-text">
              CNC DESIGNS
            </Link>
          </Typography>

          <Typography variant="h6" className="nav-link desktop-link">
          <Link to="/wood" style={{fontFamily: 'system-ui' ,fontSize:'1rem'}} className="nav-link-text">
              WOOD FOR SALE
            </Link>
          </Typography>


          <Typography variant="h6" className="nav-link desktop-link">
            <Link to="/aboutus"  style={{fontFamily: 'system-ui' ,fontSize:'1rem'}} className="nav-link-text">
              ABOUT US
            </Link>
          </Typography>

          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <MobileMenuPopover />
      </Grid>
    </Grid>
  </div>
  );
};

export default NavbarCategory;
