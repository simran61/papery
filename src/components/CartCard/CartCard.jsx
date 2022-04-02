import React from "react";
import { product1 } from "../../assets";
import "./cartCard.css";

function CartCard() {
  return (
    <div class="card card7">
      <div class="section1">
        <div class="c7_card_img img_bg">
          <img src={product1} alt="" />
        </div>
        <div class="card_headings padding_sm">
          <h3>Elegency Memorable Photobook</h3>
          <span class="original_price grey_text">$20.15</span>
          <span class="discount_price">$11.75</span>
          <div class="rating">
            <i class="yellow fas fa-star"></i>
            <i class="yellow fas fa-star"></i>
            <i class="yellow fas fa-star"></i>
            <i class="yellow fas fa-star-half"></i>
          </div>
          <span class="p_price bold mr_tb_sm">Quantity:</span>
          <button class="btn btn_quan">-</button>
          <span class="quantity">1</span>
          <button class="btn_quan btn">+</button>
        </div>
      </div>
      <div class="ecomm_btns padding_sm">
        <button class="btn_primary btn">
          <i class="mr_sm fas fa-heart"></i>Add to wishlist
        </button>
        <button class="btn_outline btn">
          <i class="mr_sm fa-solid fa-trash-can"></i>Remove from cart
        </button>
      </div>
    </div>
  );
}

export { CartCard };
