function Items({ id, image, name, new_price, old_price }) {
  return (
    <div className="max-w-[350px] hover:scale-105">
      <img src={image} alt="kian" />
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
