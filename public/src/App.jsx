import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer/Footer";
import wearsBanner from "./Components/assets/banner1.jpg";
import flatsBanner from "./Components/assets/banner2.jpg";
import heelsBanner from "./Components/assets/banner3.jpg";
import sandalsBanner from "./Components/assets/banner4.jpg";
import sneakersBanner from "./Components/assets/banner5.jpg";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/wears"
          element={<ShopCategory banner={wearsBanner} category="wears" />}
        />
        <Route
          path="/sneakers"
          element={<ShopCategory banner={sneakersBanner} category="sneakers" />}
        />
        <Route
          path="/flats"
          element={<ShopCategory banner={flatsBanner} category="flats" />}
        />
        <Route
          path="/sandals"
          element={<ShopCategory banner={sandalsBanner} category="sandals" />}
        />
        <Route
          path="/heels"
          element={<ShopCategory banner={heelsBanner} category="heels" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
