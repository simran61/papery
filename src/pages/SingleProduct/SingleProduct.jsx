import React from "react";
import { product2 } from "../../assets";
import "./singleProduct.css";

function SingleProduct() {
  return (
    <div className="flex text_center align_center space_btw mr_3">
      <div className="product_img singleProduct_img relative">
        <div className="badge bg_danger_color hot_product">hot</div>
        <img src={product2} alt="" />
        <a href="../wishlist/wishlist.html">
          <i className="product_heart light_primary_color fa-regular fa-heart"></i>
        </a>
      </div>
      <div className="product text_center pointer">
        <h2 className="color_primary cursive mr_tb_md">Elegence Papery</h2>
        <p className="margin_sm">
          <span className="bold">Description:</span> Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Ipsam assumenda fugiat tempora! Non
          accusantium odit laborum dicta facere perferendis hic reiciendis
          aliquid fuga accusamus nulla aperiam, aliquam omnis assumenda
          exercitationem?
        </p>
        <p className="p_price bold margin_sm size_sm">$10.25</p>
        <button className="btn_ecom margin_sm">
          <i className="mr_sm fa-solid fa-cart-arrow-down"></i>Add to cart
        </button>
        <button className="btn_ecom btn_ecomm_outline margin_sm">
          <i className="mr_sm fa-solid fa-heart"></i>Add to wishlist
        </button>
      </div>
    </div>
  );
}

export { SingleProduct };
