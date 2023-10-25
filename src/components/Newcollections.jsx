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
      <h1 className="text-2xl capitalize font-semibold lg:text-5xl py-1">
        new collections
      </h1>
      <hr className="w-[200px] h-[5px] rounded-lg my-4 bg-black mx-auto"></hr>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 lg:grid-cols-4 px-8">
        {getall}
      </div>
    </div>
  );
}

export default Newcollections;
