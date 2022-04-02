import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import './index.css';
import Home from "./pages/Home/Home";
import { Footer, Nav } from "./components";
import ProductListing from "./pages/ProductListing/ProductListing";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Auth/Login";
import { Logout } from "./pages/Auth/Logout";
import { SignUp } from "./pages/Auth/SignUp";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    {/* <Home/> */}
    <ProductListing/>
    {/* <SingleProduct/> */}
    {/* <Wishlist/> */}
    {/* <Cart/> */}
    {/* <Login/> */}
    {/* <Logout/> */}
    {/* <SignUp/> */}
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);
