import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => (
  <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
    <NavLink to="/" activeClassName="active-link" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
      Home
    </NavLink>
    <NavLink to="/cart" activeClassName="active-link" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
      Cart
    </NavLink>
  </nav>
);

export default NavBar;
