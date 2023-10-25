import new_collections from "../assets/new_collections";
import Items from "./Items";
function Newcollections() {
  const getall = new_collections.map((item, i) => {
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
    <div className="flex-col flex items-center">
      <h1 className="text-2xl font-semibold lg:text-5xl py-2">
        new collections
      </h1>
      <hr className="w-[200px] h-[5px] rounded-lg my-4 bg-black mx-auto"></hr>
      <div className="flex justify-center flex-wrap gap-2 px-4">{getall}</div>
    </div>
  );
}

export default Newcollections;
