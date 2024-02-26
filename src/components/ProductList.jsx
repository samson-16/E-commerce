import React from "react";
import { NavLink, Link } from "react-router-dom";
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
// import Catagories from "./Catagories";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import welcome from "../images/Welcome.jpg";
import iphone15 from "../images/Iphone15.jpg";
import Samsung24 from "../images/Samsung24.jpg";
import Nike from "../images/Nike.png";

const ProductList = () => {
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
      price: 55,
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
  ];

  const Latestproduct = [
    {
      id: 1,
      name: "Iphone-15",
      description:
        "iPhone 14 and iPhone 14 Plus introduce a new standard for photo and video capture with a new 12MP Main camera featuring a larger sensor and larger pixels, a new front TrueDepth camera, the Ultra Wide camera to capture more of a scene, and Photonic Engine for a giant leap in low-light performance.",
      price: 999.99,
      image: iphone15,
      catagoty: "Electronics",
    },
    {
      id: 2,
      name: "Samsung24",
      description:
        "The Samsung Galaxy S24 is a series of high-end Android-based smartphones designed, developed, manufactured, and marketed by Samsung Electronics as part of its flagship Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S23 series.[5][6] The phones were announced on January 17, 2024, at the 2024 Galaxy Unpacked, alongside Galaxy AI, in San Jose, California. The Samsung Galaxy S24, 24+, and 24 Ultra were released on January 31, 2024",
      price: 799.99,
      image: Samsung24,
      catagoty: "Electronics",
    },
    {
      id: 3,
      name: "Nike",
      description: "Nike's New Joyride Sneakers Made Me Actually Like Running",
      price: 180,
      image: Nike,
      catagoty: "Shoe",
    },
  ];
  const categories = [
    { name: "Electronics", value: "Electronics", image: Electronics },
    { name: "Cloth", value: "cloth", image: Cloth },
    { name: "Shoe", value: "Shoe", image: Shoe },
  ];

  const WelcomeImage = [welcome, Electronics, Cloth, Shoe];

  return (
    <div>
      <NavBar />
      <Slide>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${WelcomeImage[0]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${WelcomeImage[1]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${WelcomeImage[2]})` }}></div>
        </div>
      </Slide>

      <h1 className="p-list">Catagories</h1>
      <Link to="/Catagories">
        <button
          style={{
            width: "85px",
            height: "25px",
            marginLeft: "50%",
            top: "10px",
            marginBottom: "10px",
          }}
        >
          Products
        </button>
      </Link>
      <div className="productcon">
        {categories.map((category) => (
          <div>
            <img className="images" src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <h2 className="p-list">Latest Products</h2>
      <Link to="/Catagories">
        <button
          style={{
            width: "85px",
            height: "25px",
            marginLeft: "50%",
            top: "10px",
            marginBottom: "10px",
          }}
        >
          Products
        </button>
      </Link>
      <div className="productcon">
        {Latestproduct.map((latest) => (
          <div className="product-list">
            <img className="images" src={latest.image} alt={latest.name} />
            <p>{latest.name}</p>
            <p>${latest.price}</p>
          </div>
        ))}
      </div>

      <h2 className="p-list">Our Products</h2>
      <div className="Products">
        <div className="productcon">
          {products.map((product) => (
            <NavLink style={{textDecoration:'none'}}
              to={`/products/${product.id}`}
              key={product.id}
              state={{ data: product }}
            >
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
    </div>
  );
};
export default ProductList;
