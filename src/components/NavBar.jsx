import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
const NavBar = () => (
  <nav>
    <NavLink to="/" activeClassName="active-link">
      Home
    </NavLink>
    <NavLink to="/cart" activeClassName="active-link">
      Cart
    </NavLink>
  </nav>
);

export default NavBar;