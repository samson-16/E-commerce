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
          <p>{state.data.name}</p>
          <p className='shop-description'>Description: {state.data.description}</p>
          <p>Price: ${state.data.price}</p>
          <p>Quantity: {cart.find((item) => item.product.id === state.data.id)?.quantity}</p>
          <button onClick={increaseQuantity} className='btn'>+</button>
          <button onClick={decreaseQuantity} className='btn'>-</button>
          <button onClick={removeFromCart} className='btn'>Remove</button>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={checkout} className='btn'>Checkout</button>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ShoppingCart;
