import { useContext } from "react";
import { ShopContext } from "../components/context/Createcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import Productdisplay from "../components/Productdisplay";

function Product() {
  const { alldata } = useContext(ShopContext);
  const { productid } = useParams();
  const product = alldata.find((e) => {
    return e.id === Number(productid);
  });
  return (
    <div className="w-[85%] mx-auto">
      <Breadcrum product={product}></Breadcrum>
      <Productdisplay product={product}></Productdisplay>
    </div>
  );
}

export default Product;
