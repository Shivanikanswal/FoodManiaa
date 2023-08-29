import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  //console.log(data.itemCards[0].card.info.name);
  return (
    //Accordion Header
    <div>
      <div className="shadow-md m-3 p-1">
        <div
          className=" flex justify-between p-3 m-2 cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
