import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import NavBar from './components/NavBar';
  import ProductList from './components/ProductList';
  import ProductDetails from './components/ProductDetails';
  import ShoppingCart from './components/ShoppingCart';
  // You can do this:
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ProductList />}>
        <Route path="/products/:productId" element={<ProductDetails/>} />
        <Route path="cart" element={<ShoppingCart />} />
      </Route>
    )
  );

  export default router;