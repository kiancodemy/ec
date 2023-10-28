import { BiRightArrowAlt } from "react-icons/bi";
function Breadcrum({ product }) {
  return (
    <div className="flex items-center gap-1 py-4">
      HOME <BiRightArrowAlt />
      SHOP
      <BiRightArrowAlt />
      {product.category}
      <BiRightArrowAlt />
      {product.name}
    </div>
  );
}

export default Breadcrum;
