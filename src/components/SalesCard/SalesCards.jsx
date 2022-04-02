import React from "react";
import "./salesCards.css";

function SalesCards({ item }) {
  const { itemName, costPrice, discountPrice, rating, imgURL } = item;
  console.log(item);
  return (
    <div className="item pd_1_tb flex">
      <div className="item_card">
        <img src={imgURL} alt="" className="item_img" />
      </div>
      <div className="item_content">
        <p>{itemName}</p>
        <p className="p_discount_price mr_tb_sm grey_text strike bold">
          {costPrice}
        </p>
        <span className="danger_color bold">{discountPrice}</span>
        <div className="rating">
          {/* <i className="yellow fa-solid fa-star"></i>
          <i className="yellow fa-solid fa-star"></i>
          <i className="yellow fa-solid fa-star"></i>
          <i className="yellow fa-solid fa-star"></i>
          <i className="yellow fa-solid fa-star"></i> */}
          {rating}
        </div>
      </div>
    </div>
  );
}

export { SalesCards };
