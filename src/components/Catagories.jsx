import React from "react";
import { NavLink } from "react-router-dom";
import iphone from "../images/iphone.jpg";
import Samsung1 from "../images/Samsung-S23.avif";
import Samsung2 from "../images/samsung-a21s.jpg";
import Gucci from "../images/Gucci.jpg";
import Electronics from "../images/Electronics.png";
import Cloth from "../images/Cloth.jpg";
import Shoe from "../images/Shoe.jpg";
import Atomic from "../images/Atomic.jpg";
import NavBar from "./NavBar";
import "../App.css";
import Book from "../images/Books.jpg";
import 'react-slideshow-image/dist/styles.css';
import iphone15 from "../images/Iphone15.jpg";
import Samsung24 from '../images/Samsung24.jpg';
import Nike from "../images/Nike.png";
import Nike1 from "../images/Nike1.jpg";
import Medical from "../images/Medical.jpg";
import Beauty from '../images/Beauty.jpg';
import Iphone13 from '../images/1.png';
import Canon from '../images/3.png';
import Jacket from '../images/4.png';
const Catagories = () => {
  const categories = [
    { name: 'Electronics', value: 'Electronics', image: Electronics },
    { name: 'Cloth', value: 'cloth', image: Cloth },
    { name: 'Shoe', value: 'Shoe', image: Shoe },
    { name: 'Book', value: 'Book', image: Book },
    { name: 'Medical', value: 'Medical', image: Medical },
    { name: 'Beauty', value: 'Beauty', image: Beauty },
  ];
  const products = [
    {
      id: 1,
      name: "Iphone-14",
      description:
        "iPhone 14 and iPhone 14 Plus introduce a new standard for photo and video capture with a new 12MP Main camera featuring a larger sensor and larger pixels, a new front TrueDepth camera, the Ultra Wide camera to capture more of a scene, and Photonic Engine for a giant leap in low-light performance.",
      price: 799,
      image: iphone,
      catagoty: "Electronics",
    },
    {
      id: 2,
      name: "Samsung-s23",
      description:
        "The Samsung Galaxy S23 Ultra is powered by Snapdragon 8 Gen 2 for Galaxy the fastest Snapdragon ever. The most powerful chipset in a Galaxy. The upgraded Snapdragon® 8 Gen 2 Mobile Platform for Galaxy on the S23 Ultra makes for an immersive gaming experience with an upgraded 40% faster GPU and NPU¹ Real-time ray tracing gives gamers the ultimate digital realism on a mobile device!",
      price: 1099.99,
      image: Samsung1,
      catagoty: "Electronics",
    },
    {
      id: 3,
      name: "Samsung-A21S",
      description:
        "Galaxy A21s has fast processing and spacious storage so you can focus on now. An advanced Octa-core processor and 4GB of RAM deliver smooth and efficient performance.",
      price: 224,
      image: Samsung2,
      catagoty: "Electronics",
    },
    {
      id: 4,
      name: "Gucci",
      description: "This is Gucci jacket",
      price: 200,
      image: Gucci,
      catagoty: "Cloth",
    },

    {
      id: 5,
      name: "Atomic Habit",
      description:
        "Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.",
      price: 123,
      image: Atomic,
      catagoty: "Book",
    },
    {
      id: 6,
      name: "Iphone-15",
      description:
      "iPhone 14 and iPhone 14 Plus introduce a new standard for photo and video capture with a new 12MP Main camera featuring a larger sensor and larger pixels, a new front TrueDepth camera, the Ultra Wide camera to capture more of a scene, and Photonic Engine for a giant leap in low-light performance.",
      price: 999.9,
      image: iphone15,
      catagoty: "Electronics",
    },
    {
      id: 7,
      name: "Nike",
        description:  "Nike's New Joyride Sneakers Made Me Actually Like Running",
      price: 180,
      image: Nike,
      catagoty: "shoe",
    },
    {
      id: 8,
      name: "SamsungS24",
        description: 
        'The Samsung Galaxy S24 is a series of high-end Android-based smartphones designed, developed, manufactured, and marketed by Samsung Electronics as part of its flagship Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S23 series.[5][6] The phones were announced on January 17, 2024, at the 2024 Galaxy Unpacked, alongside Galaxy AI, in San Jose, California. The Samsung Galaxy S24, 24+, and 24 Ultra were released on January 31, 2024',
      price: 799.99,
      image: Samsung24,
      catagoty: "shoe",
    },
    {
      id: 9,
      name: "SABRINA 1",
        description: 
       "Sabrina 1 BKLYN's Finest",
      price: 799.99,
      image: Nike1,
      catagoty: "Shoe",
    },
    {
    id: 10,
    name: "Iphone-13",
      description: 
     "The iPhone 13 and iPhone 13 Mini (stylized as iPhone 13 mini) are smartphones designed, developed, marketed, and sold by Apple Inc. They are the fifteenth generation of iPhones (succeeding the iPhone 12 and iPhone 12 Mini respectively). They were unveiled at an Apple Event in Apple Park in Cupertino, California, on September 14, 2021, alongside the higher-priced iPhone 13 Pro and iPhone 13 Pro Max flagships",
    price: 599.99,
    image: Iphone13,
    catagoty: "Electronics",
  },
  {
    id: 11,
    name: "Canon EO5 camera",
      description: 
     "Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc. Introduced in 1987 with the Canon EOS 650, all EOS cameras used 35 mm film until October 1996 when the EOS IX was released using the new and short-lived APS film. In 2000, the D30 was announced, as the first digital SLR designed and produced entirely by Canon. Since 2005, all newly announced EOS cameras have used digital image sensors rather than film. The EOS line is still in production as Canon's current digital SLR (DSLR) range, and, with the 2012 introduction of the Canon EOS M, Canon's mirrorless interchangeable-lens camera (MILC) system. In 2018 the system was further extended with the introduction of the EOS R camera, Canon's first full frame mirrorless interchangeable lens system.",
    price: 230,
    image: Canon,
    catagoty: "Electronics",
  },
  {
    id: 12,
    name: "waxed suede jacket",
      description: 
      "Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc. Introduced in 1987 with the Canon EOS 650, all EOS cameras used 35 mm film until October 1996 when the EOS IX was released using the new and short-lived APS film. In 2000, the D30 was announced, as the first digital SLR designed and produced entirely by Canon. Since 2005, all newly announced EOS cameras have used digital image sensors rather than film. The EOS line is still in production as Canon's current digital SLR (DSLR) range, and, with the 2012 introduction of the Canon EOS M, Canon's mirrorless interchangeable-lens camera (MILC) system. In 2018 the system was further extended with the introduction of the EOS R camera, Canon's first full frame mirrorless interchangeable lens system.",
    price: 68,
    image: Jacket,
    catagoty: "Cloth",
  },
  


  ];

  return (
    <>
      <NavBar />
    
      <div className="productcon">
        {categories.map((category) => (
           <div className="product-list" key={category.value}> 
              <img className="images" src={category.image} alt={category.name} /> 
              <p>{category.name}</p> 
           </div>
        ))}
      </div>
   
      <h1 style={{textAlign: "center"}}>All Products</h1>
      <div className="Products">
        <div className="productcon">
          {products.map((product) => (
            <NavLink style={{textDecoration: 'none'}}
              to={`/products/${product.id}`}
              key={product.id}
              state={{ data: product }}>
              <div className="product-list">
                <img
                  className="images"
                  src={product.image}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catagories;