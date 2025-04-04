
//  export const CDN_URL =
// export const imageUrl = cloudinaryImageId
// ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${cloudinaryImageId}`
// : "fallback-image-url.jpg"; // Use fallback image if cloudinaryImageId is missing

export const getCDNImageUrl = (cloudinaryImageId) =>
    cloudinaryImageId
      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${cloudinaryImageId}`
      : "fallback-image-url.jpg";
  
   // OR
   //import { CDN_URL } from "../utils/constants";

export const LOGO_URL=
"https://www.logodesign.net/logo/cheese-burger-with-lettuce-and-cheese-2697ld.png?size=large"

   
