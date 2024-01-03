import React from 'react';
import { useParams,useLocation } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import '../App.css'
const ProductDetails = () => {
  const {state}=useLocation()
  alert(state?.data.name)
  if (!state?.data) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{state?.data.name}</h2>
      <p className='Description'>{state?.data.description}</p>
      <p>${state?.data.price}</p>
      <AddToCartButton />
    </div>
  );
};

export default ProductDetails;