import React from "react";
import { Counter } from "./features/counter/Counter";
import { ProductList } from "./features/products/components/ProductList";
import Navbar from "./features/navbar/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Login from "./features/auth/components/Login";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductDetails from "./features/products/components/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/productdetails",
    element: <ProductDetails />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <Counter/> */}
      {/* <h1>hello world</h1> */}
      {/* <ProductList/> */}
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <LoginPage/> */}
      {/* <SignUpPage /> */}
    </div>
  );
}

export default App;
