import resList from "../utils/mockData";
import Restaurant from "./Restaurant";
import { useState } from "react";

const Body = () => {
  //Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="main-body">
      <div className="search">
        <input type="text">Search</input>
      </div>
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Sort by Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <Restaurant key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
