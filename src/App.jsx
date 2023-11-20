import Navbar from "./components/Navbar";
import Loginsignup from "./pages/Loginsignup";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import menbanner from "./assets/banner_mens.png";
import womenbanner from "./assets/banner_women.png";
import kidsbanner from "./assets/banner_kids.png";
import Footer from "./components/Footer";

import Shopcategory from "./pages/Shopcategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="font-Poppins overflow-hidden">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<Shopcategory category="men" banner={menbanner} />}
          ></Route>
          <Route
            path="/womens"
            element={<Shopcategory category="women" banner={womenbanner} />}
          ></Route>
          <Route
            path="/kids"
            element={<Shopcategory category="kid" banner={kidsbanner} />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Loginsignup />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
