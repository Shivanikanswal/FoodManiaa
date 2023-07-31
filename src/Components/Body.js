import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredListOfRests, setFilteredListOfRests] = useState([]);

  const [searchTxt, setSearchText] = useState([""]);
  // console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.0869281&lng=78.2676116&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    console.log(jsonData);

    //Optional Chaining
    setListOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRests(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const status = useOnlineStatus();

  if (status === false)
    return <h1>You are offline check your internet connection</h1>;

  // we need to bind the value of input text to a local state variable--why??

  //conditional rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchTxt}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(filteredListOfRests);
              const filteredListOfRest = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchTxt.toLowerCase())
              );

              setFilteredListOfRests(filteredListOfRest);
              //Filter the restaurant cards and update the UI.
              //For this we need the 'value' of search text.
              //therefore, we need to bind the value to a local state variable so that we can track what user has typed in that text box.
            }}
          >
            Search
          </button>
        </div>
        <div className="sort-filter">
          <label
            className="toggle-switch"
            onClick={() => {
              const filteredList = filteredListOfRests.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredListOfRests(filteredList);
            }}
          >
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>Top Rated Restaurants</span>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredListOfRests.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Restaurant resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
