import data_product from "../assets/data";
import Items from "./Items";
function Relatedproducts() {
  const getothers = data_product.map((item, index) => {
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
  });
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-[#272829] capitalize py-1 text-2xl lg:text-5xl font-semibold">
        related products
      </h1>

      <hr className="w-[200px] bg-[#272829] my-4 font-bold  rounded-md h-[5px] mx-auto "></hr>
      <div className="gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {getothers}
      </div>
    </div>
  );
}

export default Relatedproducts;
