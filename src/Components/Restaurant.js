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
      <h3>{name}</h3>
      <h4>{cuisines && cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

export default Restaurant;
