import { FiArrowRight } from "react-icons/fi";
import Heroo from "../assets/hero_image.png";
function Hero() {
  return (
    <section>
      <div className="border-none flex lg:justify-around items-center mx-auto  px-8 bg-gradient-to-b from-[#f7ced3] to-[#fff]">
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
            <button className=" hover:translate-y-[-5px] duration-300 z-50 flex cursor-pointer p-2 lg:py-2 lg:px-8 rounded-full my-5 lg:my-8 text-white bg-red-600 items-center gap-1">
              <span className="capitalize text-sm lg:text-xl">
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
