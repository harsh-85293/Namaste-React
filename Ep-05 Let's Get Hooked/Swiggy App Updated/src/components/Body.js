import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"
import {useState} from "react"
import resObj from "../utils/mockData";

const Body = () => {
    //State variable : superpowerful variable
    //Local State variable
    const [listofrestaurants, setlistofrestaurant] = useState(resObj);

    //array destructurimng is done above and below code shows it
    // const arr = useState(resObj);
    // const listofrestaurants = arr[0];
    // const setlistofrestaurant = arr[1];
   //normal js variable
//        let listofrestaurantsjs = [
//   {
//     info: {
//       id: "397778",
//       name: "Pizza Hut",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/9ba7581b-0502-420e-a66b-b23f24c96777_397778.JPG",
//       locality: "Shahdara",
//       areaName: "Krishna Nagar",
//       costForTwo: "₹350 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 4.1,
//       parentId: "721",
//       avgRatingString: "4.1",
//     },
//   },
//   {
//     info: {
//       id: "599032",
//       name: "Danish Kabab",
//       cloudinaryImageId: "f1iyvzknuprskdajqtwf",
//       locality: "Gandhi Nagar",
//       areaName: "Geeta Colony",
//       costForTwo: "₹200 for two",
//       cuisines: ["Indian"],
//       avgRating: 4.2,
//     },
//   },
//   {
//     info: {
//       id: "76225",
//       name: "Subway",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/e5386314-aae4-46e9-824e-e65ea237e295_76225.JPG",
//       locality: "Malka Ganj Road",
//       areaName: "Kamla Nagar",
//       costForTwo: "₹350 for two",
//       cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//       avgRating: 4.1,
//       parentId: "2",
//       avgRatingString: "4.1",
//     },
//   },
// ];


    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() => {
                    //filter logic here
                    //modifying state variable
                    setlistofrestaurant()
                    const filteredlist = listofrestaurants.filter(
                        (res) => res.info.avgRating > 4.1
                    );
                    setlistofrestaurant(filteredlist);
                }}
                ><b>Top Rated Restaurants</b>
                </button>
            </div>
            <div className="res-container">
                {/* Applying the map to loop over the data */}
                {
                    listofrestaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.info.id}  // Use a unique identifier
                            resData={restaurant}
                         />
                ))}
            </div>
        </div>
    );
};
export default Body;
