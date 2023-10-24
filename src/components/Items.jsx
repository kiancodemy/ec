function Items({ image, name, new_price, old_price }) {
  return (
    <div>
      <img src={image} alt="" />
      <p>{name}</p>
      <div>
        <div>{new_price}</div>
        <div>{old_price}</div>
      </div>
    </div>
  );
}

export default Items;
