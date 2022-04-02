import React from "react";
import { ListingBanner } from "../../components/ListingBanner/ListingBanner";
import { ProdListingContainer } from "../../components/ProdListingContainer/ProdListingContainer";

export default function ProductListing() {
  return (
    <div>
      <ListingBanner />
      <ProdListingContainer />
    </div>
  );
}
