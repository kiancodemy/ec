import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import Newsletter from "../components/Newsletter";

import Newcollections from "../components/Newcollections";
function Shop() {
  return (
    <div className="overflow-x-scroll">
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <Newcollections></Newcollections>
      <Newsletter></Newsletter>
    </div>
  );
}

export default Shop;
