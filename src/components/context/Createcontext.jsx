import { createContext } from "react";
import { useState } from "react";
export const ShopContext = createContext(null);
import alldata from "../../assets/all_product.js";

const get = () => {
  let cart = {};
  for (let i = 1; i < alldata.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function Createcontext({ children }) {
  let [cartitems, setitems] = useState(get());

  let additems = (id) => {
    setitems({ ...cartitems, [id]: cartitems[id] + 1 });
    console.log(cartitems);
  };

  let removeitems = (id) => {
    setitems({ ...cartitems, [id]: cartitems[id] - 1 });
  };
  let allnumbers = () => {
    let number = 0;
    for (let i in cartitems) {
      if (cartitems[i] > 0) {
        number += cartitems[i];
      }
    }
    return number;
  };

  let calculate = () => {
    let total = 0;
    for (let i in cartitems) {
      if (cartitems[i] > 0) {
        let find = alldata.find((e) => e.id === Number(i));
        total += find.new_price * cartitems[i];
      }
    }
    return total;
  };

  const allproducts = {
    allnumbers,
    calculate,
    alldata,
    cartitems,
    additems,
    removeitems,
  };
  return (
    <ShopContext.Provider value={allproducts}>{children}</ShopContext.Provider>
  );
}

export default Createcontext;
