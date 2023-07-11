import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRating } =
    resData?.data;
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="food image"
        className="food-card"
      />
      <h3 className="rest-name">{name}</h3>
      <h4 className="rest-cuisines">{cuisines && cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating} stars</h4>
      <h4 className="av-rate">₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

export default Restaurant;
