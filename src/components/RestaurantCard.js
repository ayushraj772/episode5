 
  //  import {imageUrl} from "../utils/constants";
  import { getCDNImageUrl } from "../utils/constants";
  const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.data;
  
    // Check if cloudinaryImageId exists before constructing the URL

    // const imageUrl = cloudinaryImageId
    //   ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${cloudinaryImageId}`
    //   : "fallback-image-url.jpg"; // Use fallback image if cloudinaryImageId is missing
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          // src={imageUrl}
          src={getCDNImageUrl(cloudinaryImageId)}
          // OR something wrong
          //src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "fallback-image-url.jpg"} // Using CDN_URL
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4> {/* Fixed Array Issue */}
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;