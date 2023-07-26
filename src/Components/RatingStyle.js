import { RTNG } from "../utils/constants";
const RatingStyle = () => {
  return (
    <div>
      <link rel="stylesheet" href={RTNG}></link>
      <span className="fa fa-star"></span>
    </div>
  );
};

export default RatingStyle;
