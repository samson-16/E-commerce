import React from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import '../App.css'
const ProductDetails = () => {
  const {state}=useLocation()
  if (!state?.data) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavBar />
      <h2>{state?.data.name}</h2>
      <p className='Description'>{state?.data.description}</p>
      <p>${state?.data.price}</p>
      <AddToCartButton  product={state?.data} className="cart-btn" />
    </div>
  );
};

export default ProductDetails;