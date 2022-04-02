import React from "react";
import { product1 } from "../../assets";
import "./listingCard.css";

function ListingCard({ item }) {
  const { itemName, price, imgURL, rating, category } = item;
  return (
    <div className="product pointer">
      <div className="product_img relative">
        <img src={imgURL} alt="" />
        <a href="../wishlist/wishlist.html">
          <i className="product_heart light_primary_color fa-regular fa-heart"></i>
        </a>
      </div>
      <p className="p_name margin_top text_center">{itemName}</p>
      <div className="flex space_btw">
        <p className="p_price bold text_center">${price}</p>
        <p className="p_price bold text_center">
          <i class="fa-solid fa-star color_primary mr_xsm"></i>
          {rating}
        </p>
      </div>
      <p className="p_price text_center">{category}</p>
      <button className="btn product_cart">
        <i className="mr_sm fa-solid fa-cart-arrow-down"></i>Add to cart
      </button>
    </div>
  );
}

export { ListingCard };
