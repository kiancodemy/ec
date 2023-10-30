import { Link } from "react-router-dom";
function Items({ id, image, name, new_price, old_price }) {
  return (
    <div className="max-w-[350px] hover:scale-105">
      <Link to={`/product/${id}`}>
        <img
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="rounded-md"
          src={image}
          alt="kian"
        />
      </Link>
      <p className="my-2">{name}</p>
      <div className="flex gap-[20px]">
        <div className="font-semibold text-[18px] text-[#1a1a1a]">
          ${new_price}
        </div>
        <div className="font-semibold text-[18px] text-[#999999]">
          <s>${old_price}</s>
        </div>
      </div>
    </div>
  );
}

export default Items;
