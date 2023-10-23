import Logo from "../../assets/logo.png";
import { useState } from "react";
import Cart from "../../assets/cart_icon.png";

function Navbar() {
  const [menu, setmenu] = useState("Shop");

  return (
    <section className="font-Poppins">
      <div className="container  pt-2 mx-auto justify-between border-b-2 px-2 flex">
        <div className="flex justify-center pl-7 items-center space-x-5">
          <img src={Logo} alt="logo" />
          <p className="text-3xl uppercase font-bold">Shopper</p>
        </div>
        <ul className="lg:flex hidden capitalize  justify-between items-center gap-8 ">
          <li
            onClick={() => {
              setmenu("shop");
            }}
            className="hover:border-b-red-600 border-2 duration-300 border-white cursor-pointer"
          >
            shop
          </li>
          <li
            onClick={() => {
              setmenu("mens");
            }}
            className="hover:border-b-red-600 border-2 duration-300 border-white cursor-pointer"
          >
            men
          </li>
          <li
            onClick={() => {
              setmenu("womans");
            }}
            className="hover:border-b-red-600 border-2 duration-300 border-white cursor-pointer"
          >
            women
          </li>
          <li
            onClick={() => {
              setmenu("kids");
            }}
            className="hover:border-b-red-600 border-2 duration-300 border-white cursor-pointer"
          >
            kids
          </li>
        </ul>
        <div className="lg:pr-10 flex gap-8 items-center">
          <button className="cursor-pointer hover:bg-[#aaa] hover:text-white duration-200  inline-block outline-none px-8 py-2 rounded-full border">
            Login
          </button>
          <div className="relative">
            <img className="w-[30px]" src={Cart} alt="cart" />
            <div className="absolute text-[12px] top-[-8px] right-[-18px] bg-red-600 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center">
              0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
