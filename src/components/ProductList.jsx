import React from 'react';
import { NavLink} from 'react-router-dom';
import download from "../images/download.jpg"
import Samsung1 from "../images/Samsung-S23.avif"
import Samsung2 from "../images/samsung-a21s.jpg"
import NavBar from './NavBar';
import '../App.css'
const ProductList = () =>{
  const products = [
    { id: 1, name: 'Iphone-14', description: 'iPhone 14 and iPhone 14 Plus introduce a new standard for photo and video capture with a new 12MP Main camera featuring a larger sensor and larger pixels, a new front TrueDepth camera, the Ultra Wide camera to capture more of a scene, and Photonic Engine for a giant leap in low-light performance.', 
     price: 799, image: download},
    { id: 2, name: 'Samsung-s23', 
    description: 'The Samsung Galaxy S23 Ultra is powered by Snapdragon 8 Gen 2 for Galaxy the fastest Snapdragon ever. The most powerful chipset in a Galaxy. The upgraded Snapdragon® 8 Gen 2 Mobile Platform for Galaxy on the S23 Ultra makes for an immersive gaming experience with an upgraded 40% faster GPU and NPU¹ Real-time ray tracing gives gamers the ultimate digital realism on a mobile device!',
     price: 1099.99 , image: Samsung1 },
    { id: 2, name: 'Samsung-A21S',
     description: 'Galaxy A21s has fast processing and spacious storage so you can focus on now. An advanced Octa-core processor and 4GB of RAM deliver smooth and efficient performance.',
      price: 224, image: Samsung2 },
    

  ];

 return(
  <div>
    <NavBar />
    <h2 className='p-list'>Our Products</h2>
    <div className='Products'>
    {products.map((product) => (
      < NavLink to={`/products/${product.id}`} key={product.id}
         state={{data:product}}
      >
        <div className='product-list'>
          <img className='images' src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      </NavLink>

    ))}
    </div>
  </div>
)
    }
export default ProductList;