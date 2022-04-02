import React from "react";
import { SalesCards } from "../SalesCard/SalesCards";
import "./salesCategory.css";

function SalesCategory({ name, data }) {
  return (
    <div className="top_rates flex_30">
      <div className="items_header flex align_center space_btw">
        <h3>{name}</h3>
        <div className="arrows">
          <i className="mr_sm fa-solid fa-angle-left"></i>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
      <div className="item_container">
        {data.map((item) => (
          <SalesCards item={item} />
        ))}
      </div>
    </div>
  );
}

export { SalesCategory };
