import React from "react";
import { bannerImg, discount } from "../../assets";

import "./listingBanner.css";

function ListingBanner() {
  return (
    <section>
      <div className="product_banner flex">
        <img src={bannerImg} alt="" className="banner_img" />
        <div className="flex_50 text_center">
          <p className="banner_heading text_center cursive color_primary">
            Summers Special
          </p>
          <p className="inline">EVERYTHING WITH CODE</p>
          <img src={discount} alt="" className="discount_img" />
          <h1 className="size_xl mr_1 dull_black">30% OFF</h1>
          <button className="pointer btn_ecom btn_shop_now">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export { ListingBanner };
