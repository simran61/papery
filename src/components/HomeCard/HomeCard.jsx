import React from "react";
import "./homeCard.css";

function HomeCard({ item }) {
  const { itemName, price, imgURL } = item;
  return (
    <a href="./singleProduct/singleProduct.html">
      <div className="product text_center pointer">
        <div className="product_img relative">
          <img src={imgURL} alt="" />
          <a href="./wishlist/wishlist.html">
            <i className="product_heart light_primary_color fa-regular fa-heart"></i>
          </a>
        </div>
        <p className="p_name margin_sm text_center">{itemName}</p>
        <p className="p_price bold text_center">{price}</p>
      </div>
    </a>
  );
}

export { HomeCard };
