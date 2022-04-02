import React from "react";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "../../assets";
import { Filter } from "../Filter/Filter";
import { ListingCard } from "../ListingCard/ListingCard";
import "./prodListingContainer.css";

let prodListing = [
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
  {
    itemName: "Sunny Papery",
    price: "$12.50",
    imgURL: product9,
  },
];

function ProdListingContainer() {
  return (
    <section class="flex">
      <Filter />
      <div class="show_product_cards">
        {prodListing.map((item) => (
          <ListingCard item={item} />
        ))}
      </div>
    </section>
  );
}

export { ProdListingContainer };
