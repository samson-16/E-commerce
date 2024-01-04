import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import ProductList from './components/ProductList';
  import ProductDetails from './components/ProductDetails';
  import ShoppingCart from './components/ShoppingCart';
import NotFound from "./components/Notfound";

  // You can do this:
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/products/:productId" element={<ProductDetails/>} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    )
  );

  export default router;