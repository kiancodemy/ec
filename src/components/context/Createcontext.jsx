import { createContext } from "react";
export const ShopContext = createContext(null);
import alldata from "../../assets/all_product.js";

function Createcontext({ children }) {
  let a = 25;
  const allproducts = { alldata };
  return (
    <ShopContext.Provider value={allproducts }>{children}</ShopContext.Provider>
  );
}

export default Createcontext;
