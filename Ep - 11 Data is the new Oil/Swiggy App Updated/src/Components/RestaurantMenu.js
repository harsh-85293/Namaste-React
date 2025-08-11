import Shimmer from './Shimmer'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);
    const dummy = "Dummy Data";

    if (resInfo === null) return (<Shimmer />);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};

    console.log("All Cards", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">
                {name}
            </h1>
            <p className="w-6/12 mx-auto my-4 p-4 text-left font-bold text-2xl">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* Category Accordians */}
            {
                categories.map((category, index) => 
                <RestaurantCategory
                    data={category.card.card}
                    key={`${category.card.card.categoryId ?? (category.card.card.title ?? 'cat')}-${index}`}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={()=>setShowIndex((prev) => prev === index ? null : index)}
                    dummy={dummy}
                />)
            }
        </div>
    );
}

export default RestaurantMenu;
