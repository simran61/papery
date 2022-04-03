import React from "react";
import { product1 } from "../../assets";
import { useFilter } from "../../context/filter-context";
import "./wishlistCard.css";

function WishlistCard({ item }) {
  const { productDispatch } = useFilter();
  const {
    _id,
    itemName,
    price,
    imgURL,
    rating,
    category,
    isWishlisted,
    isAddedToCart,
  } = item;
  return (
    <div class="card card7">
      <div class="section1">
        <div class="c7_card_img img_bg">
          <img src={imgURL} alt="" />
        </div>
        <div class="card_headings padding_sm">
          <h3>{itemName}</h3>
          {/* <span class="original_price grey_text">${price}</span> */}
          <span class="discount_price">${price}</span>
          <div class="rating">
            <i
              class={`yellow fa-star ${
                rating >= 1 ? "fa-solid" : "fa-regular"
              }`}
            ></i>
            <i
              class={`yellow fa-star ${
                rating >= 2 ? "fa-solid" : "fa-regular"
              }`}
            ></i>
            <i
              class={`yellow fa-star ${
                rating >= 3 ? "fa-solid" : "fa-regular"
              }`}
            ></i>
            <i
              class={`yellow fa-star ${
                rating >= 4 ? "fa-solid" : "fa-regular"
              }`}
            ></i>
            <i
              class={`yellow fa-star ${
                rating >= 5 ? "fa-solid" : "fa-regular"
              }`}
            ></i>
          </div>
          <span class="p_price bold mr_tb_sm">Quantity:</span>
          <button class="btn btn_quan">-</button>
          <span class="quantity">1</span>
          <button class="btn_quan btn">+</button>
        </div>
      </div>
      <div class="ecomm_btns padding_sm">
        <button
          onClick={() =>
            isAddedToCart
              ? productDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: { itemId: _id },
                })
              : productDispatch({
                  type: "ADD_TO_CART",
                  payload: { itemId: _id },
                })
          }
          class="btn_primary btn"
        >
          <i class="mr_sm fas fa-shopping-cart"></i>
          {isAddedToCart ? "Remove from cart" : "Add to cart"}
        </button>
        <button
          onClick={() =>
            productDispatch({
              type: "ADD_TO_WISHLIST",
              payload: { itemId: _id },
            })
          }
          class="btn_outline btn"
        >
          <i class="mr_sm fa-solid fa-trash-can"></i>Remove from wishlist
        </button>
      </div>
    </div>
  );
}

export { WishlistCard };
