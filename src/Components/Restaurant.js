import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import RatingStyle from "./RatingStyle";
import UserContext from "../utils/UserContext";
//import PromotedRestaurant from "./PromotedRestaurant";

const Restaurant = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="restaurant-card w-72 mb-8 p-5 hover:cursor-pointer font-serif hover:shadow-2xl hover:border-gray-600">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="food image"
        className="w-full rounded-xl"
      />
      <h3 className="rest-name text-inherit font-semibold text-base mt-3 mb-1">
        {name}
      </h3>
      <h4 className="rest-cuisines font-thin text-xs mt-0 text-gray-500 mb-5">
        {cuisines && cuisines.join(", ")}
      </h4>
      <div className="3Dvcls text-sm justify-between flex text-gray-700">
        <div className="rtngAv items-center bg-green-700 text-white flex h-4 w-11">
          <RatingStyle />
          <span className="rtng font-semibold text-xs">{avgRating}</span>
        </div>
        <div>|</div>
        <div className="sla">{sla.slaString}</div>
        <div>|</div>
        <div className="rtAv">{costForTwo}</div>
        <div className="rtAv">{loggedInUser}</div>
      </div>
    </div>
  );
};

//Higher Order Component
// input=> Restaurant  output=> RestaurantCardDiscount

export const withDiscountLabel = (Restaurant) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute text-lg mt-[8.2rem] ml-[1.9rem] text-white font-bold bg-gradient-to-t from-black to-transparent pt-[17px] pl-2">
          {header + " " + subHeader}
        </label>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
