import React from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import '../App.css';
import './productdetail.css';

const ProductDetails = () => {
  const { state } = useLocation();

  if (!state?.data) {
    return <div>Product not found</div>;
  }

  return (
    <div >
      <NavBar />
      <div className='product-detail'>
      <div className="details-container">
        <div className="image-container">
          <img src={state.data.image} alt={state.data.name}/>
        </div>
        <div className="info-container">
          <h2>{state?.data.name}</h2>
          <p className='Description'>{state?.data.description}</p>
          <p style={{color: '#ff3f40', marginLeft: "340px", marginTop: "60px"}}><b> Price:${state?.data.price}</b></p>
          <AddToCartButton product={state?.data}  />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
