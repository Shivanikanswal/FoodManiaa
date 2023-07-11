import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_DATA } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const [resMenu, setResMenu] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_DATA + resId);
    const jsonData = await data.json();

    //console.log(jsonData);

    setResMenu(jsonData.data);
  };

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, areaName } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { lastMileTravelString } = resMenu?.cards[0]?.card?.card?.info?.sla;

  console.log(resMenu);

  return (
    <div className="res-menu">
      <div className="res-wrapper-details">
        <p className="res-name">{name}</p>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="milestravel">{areaName + ", " + lastMileTravelString}</p>
      </div>
      <hr className="divider-name"></hr>
      <h3 className="costForTwoMsg">{costForTwoMessage}</h3>
      <h3>Menu</h3>
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
