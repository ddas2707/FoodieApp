import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  locality,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      {/* <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6> */}
      <h5>{locality}</h5>
      <h5>{cuisines}</h5>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{costForTwo}</h4> */}
      </span>
    </div>
  );
};

export default RestaurantCard;
