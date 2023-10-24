import data from "../assets/data";
import Items from "./items/Items";
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
    <div>
      <h1>Popular in women</h1>
      <div>{getall}</div>
    </div>
  );
}

export default Popular;
