import { FiArrowRight } from "react-icons/fi";
import Heroo from "../assets/hero_image.png";
function Hero() {
  return (
    <section>
      <div className="font-Poppins border-none flex lg:justify-around items-center mx-auto px-4 bg-gradient-to-b from-[#ee9ca7] to-[#ffdde1]">
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
            <button className=" hover:translate-y-[-5px] duration-300 z-50 flex cursor-pointer p-2 lg:py-2 lg:px-8 rounded-full lg:mt-10 text-white bg-red-600 items-center gap-1">
              <span className="capitalize lg:text-xl">latest collection</span>
              <FiArrowRight className="hover:translate-x-3 text-white"></FiArrowRight>
            </button>
          </div>
        </div>
        <div className="hidden basis-1/3 lg:flex lg:items-center">
          <img className="object-cover " src={Heroo} alt="v" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
