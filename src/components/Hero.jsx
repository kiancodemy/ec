import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Heroo from "../assets/hero_image.png";
function Hero() {
  return (
    <section>
      <ul className="my-10 p-4 lg:hidden grid grid-cols-2 max-w-[500px] mx-auto  capitalize font-semibold  items-center gap-x-4 gap-y-8">
        <li
          onClick={() => {
            setmenu("shop");
          }}
          className=" shadow-md text-center rounded-md hover:bg-red-600 active:shadow-lg hover:text-white  border-2 py-1 text-[18px] duration-200 border-white"
        >
          <Link to="/">shop</Link>
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}
          className=" shadow-md text-center rounded-md hover:bg-red-600 active:shadow-lg hover:text-white border-2 py-1 text-[18px] duration-200 border-white"
        >
          <Link to="/mens">men</Link>
        </li>
        <li
          onClick={() => {
            setmenu("womans");
          }}
          className=" shadow-md text-center rounded-md hover:bg-red-600 active:shadow-lg hover:text-white  border-2 py-1 text-[18px] duration-200 border-white"
        >
          <Link to="/womens">women</Link>
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
          className=" shadow-md  text-center rounded-md hover:bg-red-600 active:shadow-lg hover:text-white border-2 py-1 text-[18px] duration-200 border-white"
        >
          <Link to="/kids">kids</Link>
        </li>
      </ul>
      <div className="border-none hidden py-4 lg:flex lg:justify-around items-center mx-auto  px-8 bg-gradient-to-b from-[#f7ced3] to-[#fff]">
        <div>
          <div>
            <p className="font-semibold py-1 text-md lg:text-xl uppercase">
              new arrivals only
            </p>
            <h2 className="lg:text-6xl text-2xl font-semibold">new</h2>
            <h2 className="lg:text-6xl text-2xl font-semibold">collections</h2>
            <h2 className="lg:text-6xl text-2xl font-semibold">for everyone</h2>
          </div>
          <div>
            <button className=" lg:hover:translate-y-[-5px]  duration-300 z-50 flex cursor-pointer p-2 lg:py-2 lg:px-8 rounded-md lg:rounded-full my-5 lg:my-8 text-white bg-red-600 items-center gap-1">
              <span className="capitalize text-[12px] lg:text-xl">
                latest collection
              </span>
              <FiArrowRight className="hover:translate-x-3 text-white"></FiArrowRight>
            </button>
          </div>
        </div>
        <div className="flex">
          <img src={Heroo} alt="v" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
