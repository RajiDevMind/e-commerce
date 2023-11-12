import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/wears" element={<ShopCategory category="wears" />} />
        <Route
          path="/sneakers"
          element={<ShopCategory category="sneakers" />}
        />
        <Route path="/flats" element={<ShopCategory category="flats" />} />
        <Route path="/sandals" element={<ShopCategory category="sandals" />} />
        <Route path="/heels" element={<ShopCategory category="heels" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
