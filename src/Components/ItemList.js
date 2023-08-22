const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        //console.log(item.card.info.name);
        <div
          key={item.card.info.id}
          className=" border-b-2 border-slate m-2 p-2"
        >
          <div className=" grid">
            <span className=" text-base font-semibold">
              {item.card.info.name}
            </span>
            <span className=" text-sm">Rs.{item.card.info.price / 100}</span>
          </div>
          <p className=" text-sm text-gray-400">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
