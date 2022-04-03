import React from "react";
import { product1 } from "../../assets";
import "./listingCard.css";
import { useFilter } from "../../context/filter-context";

function ListingCard({ item }) {
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
    <div className="product pointer">
      <div className="product_img relative">
        <img src={imgURL} alt="" />
        <i
          onClick={() =>
            productDispatch({
              type: "ADD_TO_WISHLIST",
              payload: { itemId: _id },
            })
          }
          className={`product_heart light_primary_color ${
            isWishlisted ? "fa-solid" : "fa-regular"
          } fa-heart`}
        ></i>
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
        className="btn product_cart"
      >
        <i className="mr_sm fa-solid fa-cart-arrow-down"></i>
        {isAddedToCart ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
}

export { ListingCard };
