import React from "react";
import { bannerImg, discount } from "../../assets";

import "./banner.css";

function Banner() {
  return (
    <section>
      <div class="banner flex">
        <img src={bannerImg} alt="" class="banner_img" />
        <div class="flex_50 text_center">
          <p class="banner_heading text_center cursive color_primary">
            Valentine's Special
          </p>
          <p class="inline">EVERYTHING WITH CODE</p>
          <img src={discount} alt="" class="discount_img" />
          <h1 class="size_xl mr_1 dull_black">30% OFF</h1>
          <button class="pointer btn_ecom btn_shop_now">SHOP NOW</button>
        </div>
      </div>

      <div class="banner_features flex space_btw">
        <div class="feature flex align_center">
          <div class="icon_div">
            <i className="size_sm fa-solid fa-cart-arrow-down"></i>
          </div>
          <div class="feature_content">
            <h3>Free Shipping</h3>
            <p class="dark_grey_text">All orders above $59</p>
          </div>
        </div>

        <div class="feature flex align_center">
          <div class="icon_div">
            <i class="size_sm fa-solid fa-arrow-rotate-left"></i>
          </div>
          <div class="feature_content">
            <h3>Free Return</h3>
            <p class="dark_grey_text">Free 7 days return</p>
          </div>
        </div>

        <div class="feature flex align_center">
          <div class="icon_div">
            <i class="size_sm fa-solid fa-headset"></i>
          </div>
          <div class="feature_content">
            <h3>24/7 Support</h3>
            <p class="dark_grey_text">Dedicated support</p>
          </div>
        </div>

        <div class="feature flex align_center">
          <div class="icon_div">
            <i class="size_sm fa-solid fa-gift"></i>
          </div>
          <div class="feature_content">
            <h3>Gift Cards</h3>
            <p class="dark_grey_text">Cards promotion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Banner };
