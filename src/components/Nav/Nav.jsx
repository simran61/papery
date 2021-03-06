import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav_top flex space_btw">
        <p>Free shipping for order above $50</p>
        <div className="nav_top_right flex align_center">
          <p className="border_right pd_lr_sm">
            <i className="mr_sm fa-solid fa-location-dot"></i>Store Location
          </p>
          <p className="border_right pd_lr_sm">
            <i className="mr_sm fa-solid fa-truck-fast"></i>Order Now
          </p>
          <p className="border_right pd_lr_sm">
            English<i className="mr_sm fa-solid fa-angle-down"></i>
          </p>
          <p className="pd_lr_sm">
            USD<i className="mr_sm fa-solid fa-angle-down"></i>
          </p>
          <i className="close_icon fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="nav_md flex space_btw align_center">
        <div className="nav_md_right flex">
          <p className="pd_lr_sm">
            English<i className="mr_sm fa-solid fa-angle-down"></i>
          </p>
          <p className="pd_lr_sm">
            USD<i className="mr_sm fa-solid fa-angle-down"></i>
          </p>
        </div>
        <div className="nav_md_center">
          <a href="../index.html">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav_md_left flex align_center">
          <Link to={"/login"}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
          <Link to={"/profile"}>
            <i className="fa-regular fa-user"></i>
          </Link>
          <i className="fa-solid fa-magnifying-glass"></i>
          <Link to={"/wishlist"}>
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to={"/cart"}>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </Link>
        </div>
      </div>
      <div className="nav_btm flex space_btw">
        <Link to={"/"}>HOME</Link>
        <a href="#">ABOUT</a>
        <Link to={"/productListing"}>PRODUCTS</Link>
        <Link to={"/wishlist"}>WISHLIST</Link>
        <Link to={"/cart"}>CART</Link>
      </div>
    </nav>
  );
}

export { Nav };
