import Home from "./pages/Home/Home";
import { Footer, Nav } from "./components";
import ProductListing from "./pages/ProductListing/ProductListing";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Auth/Login";
import { Logout } from "./pages/Auth/Logout";
import { SignUp } from "./pages/Auth/SignUp";
import { Routes, Route, Link } from "react-router-dom";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<Mockman />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      {/* <Home/> */}
      {/* <ProductListing/> */}
      {/* <SingleProduct/> */}
      {/* <Wishlist/> */}
      {/* <Cart/> */}
      {/* <Login/> */}
      {/* <Logout/> */}
      {/* <SignUp/> */}
      <Footer />
    </div>
  );
}

export default App;
