import { useContext } from "react";
import cross from "../assets/cart_cross_icon.png";
import { ShopContext } from "../components/context/Createcontext";
function Cart() {
  let { alldata, cartitems, removeitems } = useContext(ShopContext);
  return (
    <div className="max-w-[80%] mx-auto ">
      <div className="grid grid-cols-6 gap-2 pt-8">
        <p className=" text-center">product</p>
        <p className="hidden lg:block text-center">title</p>
        <p className=" text-center">price</p>
        <p className=" text-center">quantity</p>
        <p className=" text-center">total</p>
        <p>remove</p>
      </div>
      <hr />
      {alldata.map((item) => {
        if (cartitems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="grid gap-2 grid-cols-6 pt-8 items-center justify-center">
                <img
                  className="mx-auto w-[50px]
                  h-[50px] lg:w-[150px] lg:h-[150px] rounded-md "
                  src={item.image}
                  alt=""
                />
                <p className=" hidden lg:block">{item.name}</p>
                <p className=" text-center">{item.new_price}</p>
                <button className="">{cartitems[item.id]}</button>
                <p className=" text-center">
                  {item.new_price * cartitems[item.id]}
                </p>
                <img
                  className=" ml-5 cursor-pointer"
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
      <div>
        <div>
          <h1>total</h1>
          <div>
            <div>
              <p>subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div>
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div>
              <p>total</p>
              <p>${0}</p>
            </div>
            <hr />
          </div>
          <button>proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
