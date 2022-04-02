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
import { HomeCard } from "../HomeCard/HomeCard";
import "./categoriesSection.css";

let data = [
  {
    itemName: "Girlish Papery",
    price: "$15.75",
    imgURL: product1,
  },
  {
    itemName: "Elegence Papery",
    price: "$21.50",
    imgURL: product2,
  },
  {
    itemName: "Love Papery",
    price: "$10.25",
    imgURL: product3,
  },
  {
    itemName: "The Baker Papery",
    price: "$11.75",
    imgURL: product4,
  },
  {
    itemName: "Pinkish Papery",
    price: "$18.75",
    imgURL: product5,
  },
  {
    itemName: "Butterfly Papery",
    price: "$15.75",
    imgURL: product6,
  },
  {
    itemName: "Smallish Gratitude Papery",
    price: "$5.75",
    imgURL: product7,
  },
  {
    itemName: "Peach Nature Papery",
    price: "$15.75",
    imgURL: product8,
  },
];

function CategoriesSection() {
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
          {data.map((item) => (
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
