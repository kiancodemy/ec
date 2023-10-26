import { useContext } from "react";
import Items from "../components/Items";
import { FiArrowDown } from "react-icons/fi";
import { ShopContext } from "../components/context/Createcontext";
function Shopcategory({ banner, category }) {
  const { alldata } = useContext(ShopContext);
  const getbygender = alldata.map((item, index) => {
    if (item.category === category) {
      return (
        <Items
          image={item.image}
          name={item.name}
          new_price={item.new_price}
          old_price={item.old_price}
          id={item.id}
          key={index}
        ></Items>
      );
    }
  });
  return (
    <div className="max-w-[80%] mx-auto">
      <img className="hidden lg:block" src={banner} alt="banner" />
      <div className="flex py-4 items-center justify-between">
        <p>
          <span className="font-semibold ">showing 1-12</span> out of 36
        </p>
        <div>
          <button className="flex border-2 border-[#ddd] rounded-full py-1 px-2 justify-center items-center">
            <span>sort by</span>
            <FiArrowDown></FiArrowDown>
          </button>
        </div>
      </div>
      <div className="gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {getbygender}
      </div>
      <div className=" p-2 text-center my-16 ">
        <button className="capitalize rounded-full inline-block py-2 px-8 bg-[#ddd] ">
          explore more
        </button>
      </div>
    </div>
  );
}

export default Shopcategory;
