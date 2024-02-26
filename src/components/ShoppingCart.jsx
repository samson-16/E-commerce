import React, { useState } from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import '../App.css';

const ShoppingCart = () => {
  const { state } = useLocation();
  const [cart, setCart] = useState([{ product: state?.data, quantity: 1 }]);

  const increaseQuantity = () => {
    const updatedCart = cart.map((item) =>
      item.product.id === state.data.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = () => {
    const updatedCart = cart.map((item) =>
      item.product.id === state.data.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((item) => item.product.id !== state.data.id);
    setCart(updatedCart);
    alert(`Removing ${state.data.name} from the cart`);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const checkout = () => {
    alert(`Order Summary:\nTotal: $${calculateTotal()}`);
    setCart([]); 
  };

  return (
    <div>
      <NavBar />
      <h2 className='shopping-cart'>Shopping Cart</h2>

      {state?.data ? (
        <div className='shopping-cart-item'>
          <p style={{textAlign:"center"}}><b>{state.data.name}</b></p>
          <div className="shop-con">
          <img src={state.data.image} alt={state.data.name} style={{width:'300px', height:'300px'}}/>
         <div className='shop-info'>
         <p className='shop-description'>{state.data.description}</p>
          <p>Price: ${state.data.price}</p>
          <p><b>Quantity: {cart.find((item) => item.product.id === state.data.id)?.quantity}</b></p>
          <button onClick={increaseQuantity} className='btnn'>+</button>
          <button onClick={decreaseQuantity} className='btnn'>-</button>
          <button onClick={removeFromCart} className='btn'>Remove</button>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={checkout} className='btn'>Checkout</button>
         </div>
          </div>

        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ShoppingCart;
