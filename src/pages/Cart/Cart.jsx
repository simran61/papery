import React from "react";
import { product1, product2 } from "../../assets";
import { CartCard } from "../../components/CartCard/CartCard";
import { CartTable } from "../../components/CartTable/CartTable";

function Cart() {
  return (
    <div className="cart">
      <h3 className="cursive color_primary text_center margin_sm">
        My cart (2)
      </h3>
      <div className="flex space_around">
        <div className="show_cart_products">
          <CartCard />
          <CartCard />
        </div>
        <CartTable />
      </div>
    </div>
  );
}

export { Cart };
