import React from "react";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";
import { useFilter } from "../../context/filter-context";
import "./wishlist.css";

function Wishlist() {
  const { productState } = useFilter();
  const wishlistedItems = productState.product.filter(
    (item) => item.isWishlisted
  );
  return (
    <div class="cart">
      <h3 class="cursive color_primary text_center margin_sm">
        My Wishlist ({wishlistedItems.length})
      </h3>
      <div class=" flex show_cart_products">
        {wishlistedItems.map((item) => (
          <WishlistCard item={item} />
        ))}
      </div>
    </div>
  );
}

export { Wishlist };
