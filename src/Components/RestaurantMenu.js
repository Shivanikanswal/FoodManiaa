import Shimmer from "./Shimmer";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <ShimmerMenu />;
  }

  const { name, cuisines, costForTwoMessage, areaName } =
    resMenu?.cards[0]?.card?.card?.info;

  const { cards } = resMenu.cards[2].groupedCard.cardGroupMap.REGULAR;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(cards);

  //const categoriesMenu = cards.filter((item)=> item.card.card.[ "@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

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
      <hr className="divider-name"></hr>
      <h3 className="costForTwoMsg">{costForTwoMessage}</h3>
      <h3></h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
