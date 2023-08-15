import { RTNG } from "../utils/constants";
const RatingStyle = () => {
  return (
    <div>
      <link rel="stylesheet" href={RTNG}></link>
      <span className="fa fa-star mr-1 ml-1 text-xs"></span>
    </div>
  );
};

export default RatingStyle;
