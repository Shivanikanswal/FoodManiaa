import { CDN_URL } from "../utils/constants";
import RatingStyle from "./RatingStyle";
//import PromotedRestaurant from "./PromotedRestaurant";

const Restaurant = (props) => {
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
      </div>
    </div>
  );
};

// export const withPromotedLabel = (Restaurant) => {
// return <PromotedRestaurant />;
// };

export default Restaurant;
