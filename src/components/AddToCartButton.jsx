import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';
const AddToCartButton = ({product}) => (
  <NavLink  to={"/cart"}
    state={{data:product}}
  >Add to Cart</NavLink>
);

export default AddToCartButton;