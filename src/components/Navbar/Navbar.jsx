import Logo from "../../assets/logo.png";

import Cart from "../../assets/cart_icon.png";

function Navbar() {
  return (
    <section>
      <div className="container mx-auto justify-between border-b-2 px-2 flex">
        <div className="  flex justify-center pl-7 items-center space-x-5">
          <img src={Logo} alt="logo" />
          <p className="text-3xl uppercase font-bold">Shopper</p>
        </div>
        <ul className="lg:flex hidden capitalize font-semibold justify-between items-center gap-8 ">
          <li className="hover:border-b-red-600 border-2 duration-300 border-white">
            shop
          </li>
          <li className="hover:border-b-red-600 border-2 duration-300 border-white">
            men
          </li>
          <li className="hover:border-b-red-600 border-2 duration-300 border-white">
            women
          </li>
          <li className="hover:border-b-red-600 border-2 duration-300 border-white">
            kids
          </li>
        </ul>
        <div className="lg:pr-10 flex gap-10 items-center">
          <button className="inline-block outline-none px-8 py-2 rounded-full border">
            Login
          </button>

          <img src={Cart} alt="cart" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
