import React, { useState } from "react";
import { Link } from 'react-router-dom'; 

function Recipecard(props) {
  const fav=JSON.parse(localStorage.getItem("favfood"));
  // Initialize 'isfav' as 'false' and the list of favorite foods from localStorage
 
  const [isfav, setisfav] = useState(fav.includes(props.meal.idMeal));
 
  const itemss = JSON.parse(localStorage.getItem("favfood"));
  const [favfood, setfavfood] = useState(itemss || []);

  

  const favourite = (e) => {
    const mealId = props.meal.idMeal;

    if (!isfav) {
      // Add the item to the favorites if it's not already there
      const updatedFavFood = [...favfood, mealId];

      // Update the state with the new list of favorites
      setfavfood(updatedFavFood);

      // Update the localStorage with the new favorites list
      localStorage.setItem("favfood", JSON.stringify(updatedFavFood));

      // Set 'isfav' to true since this item is now in the favorites
      setisfav(true);

      // Update the button style
      e.target.classList.add("bg-red-600");
      e.target.classList.remove("bg-pink-500");
    } else {
      // Remove the item from the favorites
      const updatedFavFood = favfood.filter((item) => item !== mealId);

      // Update the state with the new list of favorites
      setfavfood(updatedFavFood);

      // Update the localStorage with the new favorites list
      localStorage.setItem("favfood", JSON.stringify(updatedFavFood));

      // Set 'isfav' to false since this item is no longer in the favorites
      setisfav(false);

      // Update the button style
      e.target.classList.add("bg-pink-500");
      e.target.classList.remove("bg-red-600");
    }
  };

  return (
    <div className="  flex flex-col rounded-md bg-purple-300 p-4 shadow-lg">
      <img
        src={props.meal.strMealThumb}
        alt="image"
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold text-white">{props.meal.strMeal}</h1>
        <h2 className="text-md text-stone-700">{props.meal.strCategory}</h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-4 sm:space-y-0 sm:space-x-4 px-4">
      <Link to={"/details"} state={{ meals: props.meal }} className="w-full sm:w-auto">
    <button
      className="p-2 w-full sm:w-auto rounded-md bg-blue-500 text-white font-semibold hover:bg-indigo-500 transition-transform transform hover:scale-105 duration-300 text-sm md:text-base"
    >
      Detail
    </button>
  </Link>
       
        <button
          onClick={favourite}
          className={`flex-1 p-2 rounded-md ${isfav ? "bg-red-600" : "bg-pink-500"} hover:bg-red-500 text-white font-semibold transition-transform transform hover:scale-105 duration-300 text-sm md:text-base`}>
  {isfav ? "Favourites" : "Add to Favourites"}
        </button>
      </div>
    </div>
  );
}

export default Recipecard;
