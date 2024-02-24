import React from 'react';
import '../App.css'


const ProductItem = ({ product, addToCart }) => (

    <div className='product-item '>
    <h3>{product.name}</h3>
    <img src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button  onClick={() => addToCart(product)}>Add to Cart</button>
  </div>

);

export default ProductItem;
