import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';
const AddToCartButton = ({product}) => (
  <NavLink  to={"/cart"} style={{textDecoration: "none", color:"white", marginLeft: '400px', marginTop: '300px', padding:"8px 16px", border: 'none', borderRadius: '8px', backgroundColor: '#ff3f40' }}
    state={{data:product}} 
  >Add to Cart</NavLink>
);

export default AddToCartButton;