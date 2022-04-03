import React from "react";
import {
  leafLeft,
  leafRight,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
} from "../../assets";
import { useFilter } from "../../context/filter-context";
import { HomeCard } from "../HomeCard/HomeCard";
import "./categoriesSection.css";

function CategoriesSection() {
  const { productState } = useFilter();
  return (
    <section>
      <div>
        <div className="heading text_center relative">
          <img className="leaf_left" src={leafLeft} alt="" />
          <img className="leaf_right" src={leafRight} alt="" />
          <p className="cursive">Just for you</p>
        </div>
        <div className="filter_tabs flex space_btw">
          <p className="size_md active pointer">New Arrivals</p>
          <p className="size_md pointer">Sale Items</p>
          <p className="size_md pointer">Best Sellers</p>
        </div>

        <div className="show_products flex space_btw">
          {productState.product.map((item) => (
            <HomeCard item={item} />
          ))}
        </div>

        <div className="more text_center mr_3 pointer">
          <i className="mr_sm fa-solid fa-plus"></i>Load More
        </div>
      </div>
    </section>
  );
}

export { CategoriesSection };
