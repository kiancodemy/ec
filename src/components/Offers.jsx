import exclusive from "../assets/exclusive_image.png";
function Offers() {
  return (
    <div className="bg-gradient-to-b rounded-lg px-6 my-3  lg:px-[100px] mb-[100px] from-[#C9D6FF] to-[#E2E2E2] lg:w-[70%] flex lg:h-[60vh] mx-auto">
      <div className="p-5 flex flex-col justify-center">
        <h1 className="text-5xl capitalize font-semibold text-[#171717]">
          exclusive
        </h1>
        <h1 className="text-5xl capitalize font-semibold text-[#171717]">
          offers for you
        </h1>
        <p className="text-2xl py-1 font-semibold text-[#171717]">
          only on best sellers products
        </p>
        <button className="cursor-pointer mt-5 text-white bg-red-600 rounded-lg border-none w-[240px] h-[50px] font-semibold">
          check now
        </button>
      </div>
      <div className="lg:flex pt-[50px] hidden  ">
        <img src={exclusive} alt="images" />
      </div>
    </div>
  );
}

export default Offers;
