import { useContext } from "react";
import start from "../assets/star_icon.png";
import { ShopContext } from "./context/Createcontext";

import Description from "./Description";
import Relatedproducts from "./Relatedproducts";
import { useState } from "react";

function Productdisplay({ product }) {
  const { additems } = useContext(ShopContext);
  const [a, b] = useState(false);
  return (
    <div>
      <div className="flex flex-col lg:flex-row py-4 gap-10">
        <div className="basis-1/2 grow flex gap-4">
          <div className="basis-1/4 grow flex flex-col gap-2">
            <img
              src={product.image}
              className="cursor-pointer rounded-lg hover:scale-90 duration-300 hover:border-red-500 border-2 p-2"
              alt="d"
            />
            <img
              src={product.image}
              className=" rounded-lg cursor-pointer hover:scale-90 duration-300 hover:border-red-500 border-2 p-2"
              alt="d"
            />
            <img
              src={product.image}
              className="rounded-lg cursor-pointer hover:scale-90 duration-300 hover:border-red-500 border-2 p-2"
              alt="d"
            />
            <img
              src={product.image}
              className="cursor-pointer rounded-lg hover:scale-90 duration-300 hover:border-red-500 border-2 p-2"
              alt="d"
            />
          </div>
          <div className=" basis-4/5 grow flex">
            <img
              className="object-cover h-full w-full rounded-lg "
              src={product.image}
              alt="x"
            />
          </div>
        </div>
        {/*second*/}
        <div className="basis-1/2 grow flex pt-2 flex-col gap-6">
          <h1 className="text-xl lg:text-3xl font-semibold">{product.name}</h1>
          <div className="flex">
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
          </div>
          <div className="flex items-center gap-4 py-2">
            <div className="font-bold">
              <s className="text-md">${`${product.old_price}`}</s>
            </div>
            <div className="text-red-600 text-md font-bold">
              ${product.new_price}
            </div>
          </div>
          <div className="font-semibold capitalize">
            lightweighr useally knitted pullover shirt close fitiing and
            neckline and short sleeves suit for the best use in summer
          </div>
          <h1 className="pt-2 capitalize font-semibold">select size</h1>
          <div className="flex gap-4 py-2">
            <div className="cursor-pointer hover:border-[#ddd] rounded-md border-2 border-[#eee] py-2 px-3 font-semibold">
              S
            </div>
            <div className="cursor-pointer hover:border-[#ddd] rounded-md border-2 border-[#eee] py-2 px-3 font-semibold">
              M
            </div>
            <div className=" hover:border-[#ddd] rounded-md border-2 border-[#eee] py-2 px-3 font-semibold">
              L
            </div>
            <div className=" hover:border-[#ddd] rounded-md border-2 border-[#eee] py-2 px-3 font-semibold">
              XL
            </div>
            <div className=" hover:border-[#ddd] rounded-md border-2 border-[#eee] py-2 px-3 font-semibold">
              XXL
            </div>
          </div>
          <div
            onClick={() => {
              additems(product.id);
            }}
            className=" cursor-pointer bg-red-600 hover:bg-red-700 text-[#eee] py-2 duration-300 px-4 rounded-md active:translate-y-2  self-start"
          >
            ADD TO CART
          </div>
          <div className="flex flex-col gap-1 pt-4 ">
            <div className="flex gap-1">
              <span className="font-semibold">category:</span> Woman, Tshirt,
              Crop,
            </div>
            <div className="flex gap-1">
              <span className="font-semibold">Tags:</span>Modern, Latest
            </div>
          </div>
        </div>
      </div>
      <Description></Description>
      <div className=" mt-10 flex justify-center items-center">
        {!a && (
          <button
            className="bg-[#ddd] duration-200 text-[#000] hover:mb- rounded-md px-8 py-4 hover:bg-[#000] hover:text-white "
            onClick={() => {
              b(true);
            }}
          >
            explore more
          </button>
        )}
      </div>

      {a && <Relatedproducts></Relatedproducts>}
    </div>
  );
}

export default Productdisplay;
