import React from 'react';
import { NavLink} from 'react-router-dom';
import download from "../images/download.jpg"
import Samsung1 from "../images/samsung-23.jpg"
import Samsung2 from "../images/samsung-a21s.jpg"
import '../App.css'
const ProductList = () =>{
  const products = [
    { id: 1, name: 'Iphone-14', description: 'iPhone 14 and iPhone 14 Plus introduce a new standard for photo and video capture with a new 12MP Main camera featuring a larger sensor and larger pixels, a new front TrueDepth camera, the Ultra Wide camera to capture more of a scene, and Photonic Engine for a giant leap in low-light performance.', 
     price: 10.99, image: download},
    { id: 2, name: 'Samsung-s23', description: 'The Samsung Galaxy S23 Ultra is powered by Snapdragon 8 Gen 2 for Galaxy the fastest Snapdragon ever.',
     price: 19.99, image: Samsung1 },
    { id: 2, name: 'Samsung-A21S',
     description: 'Galaxy A21s has fast processing and spacious storage so you can focus on now. An advanced Octa-core processor and 4GB of RAM deliver smooth and efficient performance.',
      price: 19.99, image: Samsung2 },
    

  ];

 return(
  <div>
    <h2>Product Listings</h2>
    {products.map((product) => (
      < NavLink to={`/products/${product.id}`} key={product.id}
         state={{data:product}}
      >
        <div>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      </NavLink>
    ))}
  </div>
)
    }
export default ProductList;