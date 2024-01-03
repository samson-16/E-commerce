
import { RouterProvider} from 'react-router-dom';
import router from './router';
import NavBar from './components/NavBar';
import "./App.css"



const App = () => {
  // const addToCart = (product) => {
  //   const updatedCart = [...cart, { product, quantity: 1 }];
  //   setCart(updatedCart);
  // };

  // const updateQuantity = (productId, newQuantity) => {
  //   const updatedCart = cart.map((item) =>
  //     item.product.id === productId ? { ...item, quantity: newQuantity } : item
  //   );
  //   setCart(updatedCart);
  // };
  // const removeFromCart = (productId) => {
  //   const updatedCart = cart.filter((item) => item.product.id !== productId);
  //   setCart(updatedCart);
  // };

  // const calculateTotal = () =>
  // cart.reduce((total, item) => total + item.product.price * item.quantity, 
  // 0);

  // const checkout = () => {
 
  //   alert(`Order Summary:\nTotal: $${calculateTotal().toFixed(2)}`);
  
  //   setCart([]);
  // };
  

  return (
      <>
      <RouterProvider router={router} />
      </>
  );
};

export default App;