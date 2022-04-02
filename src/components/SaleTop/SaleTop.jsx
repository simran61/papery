import React from "react";
import {
  giftIdeas,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "../../assets";
import { SalesCategory } from "../SalesCategory/SalesCategory";

import "./saleTop.css";

const dataTop = [
  {
    itemName: "Girlish Papery",
    costPrice: "$15.75",
    discountPrice: "$14.25",
    rating: "4.5",
    imgURL: product1,
  },
  {
    itemName: "Elegence Papery",
    costPrice: "$21.50",
    discountPrice: "$19.75",
    rating: "4.5",
    imgURL: product2,
  },
  {
    itemName: "Love Papery",
    costPrice: "$10.25",
    discountPrice: "$9.50",
    rating: "4.5",
    imgURL: product3,
  },
];

const dataSales = [
  {
    itemName: "Butterfly Papery",
    costPrice: "$21.50",
    discountPrice: "$15.75",
    rating: "4.5",
    imgURL: product6,
  },
  {
    itemName: "Pinkish Papery",
    costPrice: "$12.50",
    discountPrice: "$18.75",
    rating: "4.5",
    imgURL: product5,
  },
  {
    itemName: "The Baker Papery",
    costPrice: "$16.25",
    discountPrice: "$11.75",
    rating: "4.5",
    imgURL: product4,
  },
];

function SaleTop() {
  return (
    <section className="flex mr_3 space_btw">
      <div className="potrait_img flex_30">
        <img src={giftIdeas} alt="" className="side_img" />
      </div>
      <SalesCategory name="Top Rate" data={dataTop} />
      <SalesCategory name="Sale Item" data={dataSales} />
    </section>
  );
}

export { SaleTop };
