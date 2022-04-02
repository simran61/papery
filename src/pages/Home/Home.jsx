import React from "react";

import { Header, CategoriesSection, Banner, SaleTop } from "../../components";

import { Newsletter } from "../../components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      <Header />
      <CategoriesSection />
      <Banner />
      <SaleTop />
      <Newsletter />
    </div>
  );
}
