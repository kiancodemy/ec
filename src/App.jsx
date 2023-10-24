import Navbar from "./components/Navbar";
import Loginsignup from "./pages/Loginsignup";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

import Shopcategory from "./pages/Shopcategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<Shopcategory category="mens" />}
          ></Route>
          <Route
            path="/womens"
            element={<Shopcategory category="womens" />}
          ></Route>
          <Route
            path="/kids"
            element={<Shopcategory category="kids" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Loginsignup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
