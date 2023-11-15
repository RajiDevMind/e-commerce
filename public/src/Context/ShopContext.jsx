import React, { createContext } from "react";
import allProducts from "../Components/assets/allproducts.jsx";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const contextValue = { allProducts };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
