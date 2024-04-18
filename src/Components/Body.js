import Restaurant, { withDiscountLabel } from "./Restaurant";
import Shimmer from "./Shimmer";
import { SWIGGY_URL, CORS } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredListOfRests, setFilteredListOfRests] = useState([]);

  const [searchTxt, setSearchText] = useState([""]);

  const RestaurantCardDiscount = withDiscountLabel(Restaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/api/" + CORS + SWIGGY_URL);
    console.log(data);
    // CORS + encodeURIComponent(SWIGGY_URL)
    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRests(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const status = useOnlineStatus();

  if (status === false)
    return <h1>You are offline check your internet connection</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  //conditional rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body">
      <div className="filter flex justify-evenly items-center mt-8">
        <div className="search flex rounded-md outline outline-1 shadow-lg shadow-slate-300">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="search-box bg-neutral-100 w-96 h-10 pl-4 focus:outline-none"
              value={searchTxt}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="bg-neutral-100 px-2 h-10 border-l border-black text-black"
              onClick={() => {
                // console.log(filteredListOfRests);
                const filteredListOfRest = listOfRestaurants.filter((res) =>
                  res.data.name.toLowerCase().includes(searchTxt.toLowerCase())
                );
                setFilteredListOfRests(filteredListOfRest);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="sort-filter ml-80">
          <label
            className="toggle-switch relative inline-flex items-center cursor-pointer"
            onClick={() => {
              const filteredList = filteredListOfRests.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredListOfRests(filteredList);
            }}
          >
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-700"></div>
            <span className="slider round ml-3 text-sm font-medium text-gray-900">
              Top Rated Restaurants
            </span>
          </label>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap justify-center gap-5 py-4 px-2 mt-9">
        {filteredListOfRests.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {
                restaurant.info?.aggregatedDiscountInfoV3?.header ? (
                  <RestaurantCardDiscount resData={restaurant} />
                ) : (
                  <Restaurant resData={restaurant} />
                )
                //if discount is applied then show the percent off on the item.
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
