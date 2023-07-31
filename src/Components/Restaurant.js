import { CDN_URL } from "../utils/constants";
import RatingStyle from "./RatingStyle";

const Restaurant = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="food image"
        className="food-card"
      />
      <h3 className="rest-name">{name}</h3>
      <h4 className="rest-cuisines">{cuisines && cuisines.join(", ")}</h4>
      <div className="3Dvcls">
        <div className="rtngAv">
          <RatingStyle />
          <span className="rtng">{avgRating}</span>
        </div>
        <div>|</div>
        <div className="sla">{sla.slaString}</div>
        <div>|</div>
        <div className="rtAv">{costForTwo}</div>
      </div>
    </div>
  );
};

export default Restaurant;
