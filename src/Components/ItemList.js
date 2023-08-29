const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        //console.log(item.card.info.name);
        <div
          key={item.card.info.id}
          className=" border-b-2 border-slate m-2 p-2 flex justify-between"
        >
          <div className="p-2 m-2">
            <span className=" text-base font-semibold">
              {item.card.info.name}
            </span>
            <p className=" text-sm mt-2">
              ₹{" "}
              {item.card?.info?.price
                ? item.card?.info?.price / 100
                : item.card?.info?.defaultPrice / 100}
            </p>
            <p className=" text-sm text-gray-400 mt-4">
              {item.card?.info?.description}
            </p>
          </div>
          <div className="p-3 m-3">
            <button className="text-white bg-gray-800 absolute h-9 w-[66px] rounded-lg ml-[25px] mt-[60px]">
              Add +
            </button>
            <img
              className="max-w-[8rem] w-[118px] h-[86px] rounded-lg"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                item.card.info.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
