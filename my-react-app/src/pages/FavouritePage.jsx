import React, { useState, useEffect } from "react";
import Recipecard from "../components/Recipecard";
import { fetchRecipes_by_id } from "../services/recipe";

function FavouritePage() {
    // Safely parse localStorage and use a fallback for null
    const favitems = JSON.parse(localStorage.getItem("favfood")) || [];
    const [mealbyid, setmealbyid] = useState([]);

    // Display a message if there are no favorite items
    if (favitems.length === 0) {
        return (
            <h1 className="p-10 text-center text-bold text-xl text-amber-950">
                No Favourite Items
            </h1>
        );
    }

    useEffect(() => {
        const fetchMeals = async () => {
          if (favitems && favitems.length > 0) {
            console.log("Favorite items:", favitems);
      
            const fetchedMeals = await Promise.all(
              favitems.map(async (mealId) => {
                const meal = await fetchRecipes_by_id(mealId);
                return meal; // This is now a single meal object
              })
            );
      
            // Filter out null values in case of API errors
            const validMeals = fetchedMeals.filter((meal) => meal !== null);
      
            setmealbyid(validMeals);
            console.log("Fetched meals:", validMeals);
          }
        };
      
        fetchMeals();
      }, [favitems]);

    return (
        <>
            <h1 className="text-xl font-bold text-amber-950">Your Favourites</h1>
            <div className="container mx-auto p-4">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                    {mealbyid.map((meals, idx) => (
                        <Recipecard key={idx} meal={meals} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default FavouritePage;
