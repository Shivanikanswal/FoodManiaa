import Shimmer from "./Shimmer";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  console.log(resMenu);

  if (resMenu === null) {
    return <ShimmerMenu />;
  }

  const { name, cuisines, costForTwoMessage, areaName } =
    resMenu?.cards[2]?.card?.card?.info;

  const { cards } = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR;

  const { itemCards } = { cards }?.cards[1]?.card?.card;

  const categoriesMenu = cards.filter(
    (item) =>
      item.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="res-menu max-w-3xl mt-5 mx-auto mb-0">
      <div className="res-wrapper-details">
        <p className="res-name font-semibold text-2xl mb-2 font-serif">
          {name}
        </p>
        <div className=" text-gray-500 mt-[6px] mr-1 mb-0 ml-0">
          <p className="cuisines">{cuisines.join(", ")}</p>
          <p className="milestravel">{areaName}</p>
        </div>
      </div>
      <hr className="divider-name my-2"></hr>
      {/* <h3 className="costForTwoMsg">{costForTwoMessage}</h3> */}
      {categoriesMenu.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
