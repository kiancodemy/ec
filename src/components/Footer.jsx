import logo from "../assets/logo_big.png";
import whits from "../assets/whatsapp_icon.png";
import pin from "../assets/pintester_icon.png";
import instagram from "../assets/instagram_icon.png";

function Footer() {
  return (
    <div className="flex mt-15 py-4 flex-col justify-center items-center gap-8">
      <div className="flex gap-6 justify-center items-center">
        <img src={logo} alt="kian" />
        <p className="font-semibold text-4xl uppercase">Shopper</p>
      </div>

      <ul className="capitalize flex flex-col lg:flex-row gap-2  lg:gap-8">
        <li className="border-white border-2 hover:border-b-red-600 py-1 duration-500">
          company
        </li>
        <li className="border-white border-2 hover:border-b-red-600 py-1 duration-500">
          products{" "}
        </li>
        <li className="border-white border-2 hover:border-b-red-600 py-1 duration-500">
          office
        </li>
        <li className="border-white border-2 hover:border-b-red-600 py-1 duration-500">
          about
        </li>
        <li className="border-white border-2 hover:border-b-red-600 py-1 duration-500">
          contracts
        </li>
      </ul>
      <div className="flex gap-6 ">
        <div className="p-2 border-2 border-[#ddd] rounded-lg hover:border-black duration-300">
          <img src={whits} alt="" />
        </div>
        <div className="p-2 border-2 border-[#ddd] rounded-lg hover:border-black duration-300">
          <img src={pin} alt="" />
        </div>
        <div className="p-2 border-2 border-[#ddd] rounded-lg hover:border-black duration-300">
          <img src={instagram} alt="" />
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <hr className=" lg:w-[720px] bg-[#ddd] rounded-lg h-[3px]" />
        <p className="text-center">copy right@2023 - All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
