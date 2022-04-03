import React from "react";
import { product1, product2 } from "../../assets";
import { CartCard } from "../../components/CartCard/CartCard";
import { CartTable } from "../../components/CartTable/CartTable";
import { useFilter } from "../../context/filter-context";

function Cart() {
  const { productState } = useFilter();
  const cartItems = productState.product.filter((item) => item.isAddedToCart);
  return (
    <div className="cart">
      <h3 className="cursive color_primary text_center margin_sm">
        My cart ({cartItems.length})
      </h3>
      <div className="flex space_around">
        <div className="show_cart_products">
          {cartItems.map((item) => (
            <CartCard item={item} />
          ))}
        </div>
        <CartTable />
      </div>
    </div>
  );
}

export { Cart };
