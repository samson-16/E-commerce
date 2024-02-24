import React from 'react';
import { Link } from 'react-router-dom';
import Electronics from '../images/Electronics.png';
import Cloth from '../images/Cloth.jpg';
import Shoe from '../images/Shoe.jpg';
import NavBar from './NavBar';
import Book from "../images/Books.jpg";
import '../App.css'

const Catagories = () => {
  const categories = [
    { name: 'Electronics', value: 'Electronics', image: Electronics },
    { name: 'Cloth', value: 'cloth', image: Cloth },
    { name: 'Shoe', value: 'Shoe', image: Shoe },
    { name: 'Book', value: 'Book', image: Book },
  ];

  return (
    <>
      <NavBar />
      <div className='productcon'>
        {categories.map((category, index) => (
          <Link to={`/categories/${category.value}`} key={index}>
            <div>
              <img className='category-image' src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Catagories;