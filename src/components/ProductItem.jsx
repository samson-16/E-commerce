import React from 'react';
import '../App.css'
const ProductItem = ({ product, addToCart }) => (
  <div>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductItem;
