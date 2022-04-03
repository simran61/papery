import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import { useFilter } from "../../context/filter-context";
import "./homeCard.css";

function HomeCard({ item }) {
  const { productDispatch } = useFilter();
  const { _id, itemName, price, imgURL, isWishlisted } = item;
  return (
    <div className="product text_center pointer">
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
      <p className="p_name margin_sm text_center">{itemName}</p>
      <p className="p_price bold text_center">{price}</p>
    </div>
  );
}

export { HomeCard };
