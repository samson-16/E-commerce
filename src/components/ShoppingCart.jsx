import React from 'react';
import '../App.css'
const ShoppingCart = () => (
  <div>
    <h2>Shopping Cart</h2>
    {/* {cart.map((item) => (
      <div key={item.product.id}>
        <p>{item.product.name}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
        <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
      </div>
    ))}
    <p>Total: ${calculateTotal()}</p>
    <button onClick={checkout}>Checkout</button> */}
  </div>
);

export default ShoppingCart;