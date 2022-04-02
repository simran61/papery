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
import { useFilter } from "../../context/filter-context";
import { Filter } from "../Filter/Filter";
import { ListingCard } from "../ListingCard/ListingCard";
import "./prodListingContainer.css";

function ProdListingContainer() {
  const { productState } = useFilter();
  console.log(productState);
  return (
    <section className="flex">
      <Filter />
      <div className="show_product_cards">
        {productState.product.map((item) => (
          <ListingCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}

export { ProdListingContainer };
