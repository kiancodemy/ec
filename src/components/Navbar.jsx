import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import Cart from "../assets/cart_icon.png";

function Navbar() {
  const [menu, setmenu] = useState("");

  return (
    <section>
      <div className="container mx-auto py-1 lg:justify-between justify-around gap-2 border-b-2 px-2 flex">
        <div className="flex  justify-center lg:ml-5 items-center space-x-5">
          <img src={Logo} alt="logo" />
          <p className="lg:text-3xl text-md uppercase font-bold">Shopper</p>
        </div>
        <ul className="lg:flex hidden capitalize font-semibold justify-between items-center gap-8 ">
          <li
            onClick={() => {
              setmenu("shop");
            }}
            className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white"
          >
            <Link to="/">shop</Link>
          </li>
          <li
            onClick={() => {
              setmenu("mens");
            }}
            className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white"
          >
            <Link to="/mens">men</Link>
          </li>
          <li
            onClick={() => {
              setmenu("womans");
            }}
            className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white"
          >
            <Link to="/womens">women</Link>
          </li>
          <li
            onClick={() => {
              setmenu("kids");
            }}
            className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white"
          >
            <Link to="/kids">kids</Link>
          </li>
        </ul>
        <div className="lg:pr-10 flex gap-2 lg:gap-10 items-center">
          <Link to="/login">
            <button className="inline-block hover:bg-[#aaa] shadow-md hover:shadow-xl duration-200 hover:text-white px-4 py-1  lg:px-8 lg:py-2 rounded-full border">
              Login
            </button>
          </Link>
          <div className="relative">
            <Link to="/cart">
              <img width={27} src={Cart} alt="cart" />
            </Link>
            <div className="absolute right-[-22px] top-[-15px]  w-[25px] h-[25px] rounded-full bg-red-600 text-white text-[12px] flex items-center justify-center">
              0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
