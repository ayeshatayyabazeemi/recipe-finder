// import React, { useState, useEffect } from "react";
// import Recipecard from "../components/Recipecard";
// import { fetchRecipes_by_id } from "../services/recipe";

// function FavouritePage() {
//   const [mealbyid, setmealbyid] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hasFavourites, setHasFavourites] = useState(true);

//   useEffect(() => {
//     const favitems = JSON.parse(localStorage.getItem("favfood")) || [];

//     if (favitems.length === 0) {
//       setHasFavourites(false);
//       setLoading(false);
//       return;
//     }

//     const fetchMeals = async () => {
//       try {
//         const fetchedMeals = await Promise.all(
//           favitems.map(async (mealId) => await fetchRecipes_by_id(mealId))
//         );
//         const validMeals = fetchedMeals.filter((meal) => meal !== null);
//         setmealbyid(validMeals);
//       } catch (error) {
//         console.error("Error fetching favourite meals:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeals();
//   }, []);

//   const renderSkeletonCards = () => {
//     return Array.from({ length: 6 }).map((_, index) => (
//       <div
//         key={index}
//         className="animate-pulse bg-white shadow-md rounded-lg p-4 space-y-4"
//       >
//         <div className="bg-gray-300 h-48 w-full rounded-md"></div>
//         <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//         <div className="h-3 bg-gray-300 rounded w-1/2"></div>
//         <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
//       </div>
//     ));
//   };

//   return (
//     <div className="p-6 max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold text-amber-950 mb-4">Your Favourites</h1>

//       {loading ? (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {renderSkeletonCards()}
//         </div>
//       ) : !hasFavourites || mealbyid.length === 0 ? (
//         <h2 className="text-center text-xl text-amber-700 font-semibold py-10">
//           No Favourite Items Found
//         </h2>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {mealbyid.map((meal, idx) => (
//             <Recipecard key={idx} meal={meal} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FavouritePage;



// import React, { useState, useEffect } from "react";
// import Recipecard from "../components/Recipecard";
// import { fetchRecipes_by_id } from "../services/recipe";
// import Sidebars from "../components/Sidebars";

// function FavouritePage() {
//   const favitems = JSON.parse(localStorage.getItem("favfood")) || [];
//   const [mealbyid, setmealbyid] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMeals = async () => {
//       setLoading(true);
//       if (favitems && favitems.length > 0) {
//         const fetchedMeals = await Promise.all(
//           favitems.map(async (mealId) => {
//             const meal = await fetchRecipes_by_id(mealId);
//             return meal;
//           })
//         );
//         const validMeals = fetchedMeals.filter((meal) => meal !== null);
//         setmealbyid(validMeals);
//       }
//       setLoading(false);
//     };

//     fetchMeals();
//   }, [favitems]);

//   return (
//     <div className="flex">
//       {/* Sidebar (Desktop & Mobile) */}
//       <Sidebars />

//       {/* Main content */}
//       <div className="flex-1 p-4 pb-24 md:pb-4">
//         <h1 className="text-2xl font-bold text-amber-950 mb-4">Your Favourites</h1>

//         {favitems.length === 0 ? (
//           <h2 className="text-xl text-gray-500 mt-6">No Favourite Items</h2>
//         ) : loading ? (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {Array.from({ length: 6 }).map((_, idx) => (
//               <div
//                 key={idx}
//                 className="h-64 w-full rounded-lg bg-gray-200 animate-pulse"
//               ></div>
//             ))}
//           </div>
//         ) : (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {mealbyid.map((meals, idx) => (
//               <Recipecard key={idx} meal={meals} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FavouritePage;


import React, { useState, useEffect } from "react";
import Recipecard from "../components/Recipecard";
import { fetchRecipes_by_id } from "../services/recipe";

function FavouritePage() {
  const [mealbyid, setmealbyid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasFavourites, setHasFavourites] = useState(true);

  useEffect(() => {
    const favitems = JSON.parse(localStorage.getItem("favfood")) || [];

    if (favitems.length === 0) {
      setHasFavourites(false);
      setLoading(false);
      return;
    }

    const fetchMeals = async () => {
      try {
        const fetchedMeals = await Promise.all(
          favitems.map(async (mealId) => await fetchRecipes_by_id(mealId))
        );
        const validMeals = fetchedMeals.filter((meal) => meal !== null);
        setmealbyid(validMeals);
      } catch (error) {
        console.error("Error fetching favourite meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const renderSkeletonCards = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="animate-pulse bg-white shadow-md rounded-lg p-4 space-y-4"
      >
        <div className="bg-gray-300 h-48 w-full rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
      </div>
    ));
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold text-amber-950 mb-4">Your Favourites</h1>

      {loading ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {renderSkeletonCards()}
        </div>
      ) : !hasFavourites || mealbyid.length === 0 ? (
        <h2 className="text-center text-xl text-amber-700 font-semibold py-10">
          No Favourite Items Found
        </h2>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mealbyid.map((meal, idx) => (
            <Recipecard key={idx} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouritePage;
