import React from "react";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";
import "./wishlist.css";

function Wishlist() {
  return (
    <div class="cart">
      <h3 class="cursive color_primary text_center margin_sm">
        My Wishlist (4)
      </h3>
      <div class=" flex show_cart_products">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>
    </div>
  );
}

export { Wishlist };
