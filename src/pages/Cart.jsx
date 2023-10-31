import { useContext } from "react";
import cross from "../assets/cart_cross_icon.png";
import { ShopContext } from "../components/context/Createcontext";
function Cart() {
  let { calculate, alldata, cartitems, removeitems } = useContext(ShopContext);
  let total = calculate();
  return (
    <div className="max-w-[90%] mx-auto ">
      <div className="pb-2 border-b-2 grid grid-cols-5 space-x-2 lg:grid-cols-7 pt-8">
        <p className="font-semibold text-sm capitalize">product</p>
        <p className="font-semibold text-sm capitalize lg:col-span-2 hidden lg:block">
          title
        </p>
        <p className="font-semibold   text-sm capitalize ">price</p>
        <p className="font-semibold   text-sm capitalize ">quantity </p>
        <p className="font-semibold   text-sm capitalize ">total</p>
        <p className="font-semibold   text-sm capitalize">remove</p>
      </div>
      <hr />
      {alldata.map((item) => {
        if (cartitems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="grid space-x-2 border-b-4 gap-1 border-[#ddd] grid-cols-5  lg:grid-cols-7 py-2 items-center ">
                <img
                  className=" w-[50px]
                  
                  h-[50px] lg:w-[80px] lg:h-[80px] rounded-md "
                  src={item.image}
                  alt=""
                />
                <p className=" lg:col-span-2 hidden  lg:block">{item.name}</p>
                <p>{item.new_price}</p>
                <button className="border-2 border-[#ddd] py-1 px-2 w-1/3 ">
                  {cartitems[item.id]}
                </button>
                <p>${item.new_price * cartitems[item.id]}</p>
                <img
                  className="cursor-pointer pl-6"
                  onClick={() => {
                    removeitems(item.id);
                  }}
                  src={cross}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="mt-10">
        <div className="lg:w-3/5">
          <h1 className="font-semibold text-2xl mb-6 py-4">cart total</h1>
          <div>
            <div className="flex justify-between items-center py-2 border-b-2 capitalize border-[#ddd]">
              <p>subtotal</p>
              <p>${total}</p>
            </div>
            <hr />
            <div className="flex justify-between items-center py-2 border-b-2 capitalize border-[#ddd]">
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="font-semibold border-none flex justify-between items-center py-2  capitalize">
              <p>total</p>
              <p>${total}</p>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 active:translate-y-1 duration-200 text-white inline-block rounded-md mt-6 py-2 px-6">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
