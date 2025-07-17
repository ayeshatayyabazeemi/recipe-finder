import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Recipecard({ meal }) {
  const storedFav = JSON.parse(localStorage.getItem("favfood")) || [];
  const [favfood, setFavFood] = useState(storedFav);
  const [isFav, setIsFav] = useState(storedFav.includes(meal.idMeal));

  const toggleFavourite = (e) => {
    e.preventDefault(); // Prevent navigating when clicking the heart
    const updatedFav = isFav
      ? favfood.filter((id) => id !== meal.idMeal)
      : [...favfood, meal.idMeal];

    setFavFood(updatedFav);
    setIsFav(!isFav);
    localStorage.setItem("favfood", JSON.stringify(updatedFav));
  };

  return (
    <Link
      to="/details"
      state={{ meals: meal }}
      className="relative flex flex-col rounded-md bg-sky-100 shadow-lg hover:shadow-xl transition"
    >
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <div
          onClick={toggleFavourite}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
        >
          {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold text-slate-800">{meal.strMeal}</h1>
        <h2 className="text-md text-stone-700">{meal.strCategory}</h2>
      </div>
    </Link>
  );
}

export default Recipecard;
