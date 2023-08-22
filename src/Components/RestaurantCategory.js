import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  //console.log(data.itemCards[0].card.info.name);
  return (
    //Accordion Header
    <div>
      <div className="shadow-md m-3 p-1">
        <div className=" flex justify-between p-2 m-2">
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>
          <ItemList items={data.itemCards} />
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
