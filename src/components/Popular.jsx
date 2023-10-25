import data from "../assets/data";
import Items from "./Items";
function Popular() {
  const getall = data.map((item, i) => {
    return (
      <Items
        image={item.image}
        name={item.name}
        new_price={item.new_price}
        old_price={item.old_price}
        id={item.id}
        key={i}
      ></Items>
    );
  });
  return (
    <div className="flex h-[90vh] px-4 items-center gap-[10px] flex-col">
      <h1 className="text-[#272829] py-1 text-2xl lg:text-5xl font-semibold">
        Popular in women
      </h1>
      <hr className="w-[200px] bg-[#272829] font-bold  rounded-md h-[5px] mx-auto "></hr>
      <div className="lg:flex gap-[30px] mt-10 lg:px-10">{getall}</div>
    </div>
  );
}

export default Popular;
