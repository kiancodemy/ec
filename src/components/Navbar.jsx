import Logo from "../assets/logo.png";

import Cart from "../assets/cart_icon.png";

function Navbar() {
  return (
    <section>
      <div className="container mx-auto py-1 justify-between border-b-2 px-2 flex">
        <div className="  flex justify-center pl-7 items-center space-x-5">
          <img src={Logo} alt="logo" />
          <p className="text-3xl uppercase font-bold">Shopper</p>
        </div>
        <ul className="lg:flex hidden capitalize font-semibold justify-between items-center gap-8 ">
          <li className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white">
            shop
          </li>
          <li className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white">
            men
          </li>
          <li className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white">
            women
          </li>
          <li className="hover:border-b-red-600 border-2 py-1 text-[18px] duration-200 border-white">
            kids
          </li>
        </ul>
        <div className="lg:pr-10 flex gap-10 items-center">
          <button className="inline-block hover:bg-[#aaa] shadow-md hover:shadow-xl duration-200 hover:text-white  px-8 py-2 rounded-full border">
            Login
          </button>
          <div className="relative">
            <img width={27} src={Cart} alt="cart" />
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
