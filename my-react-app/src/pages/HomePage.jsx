// import React, { useState, useEffect, useRef } from "react";
// import { fetchRecipes, defaultrecipe } from "../services/recipe";
// import Recipecard from "../components/Recipecard";

// function HomePage() {
//   const [Searchitem, setSearchitem] = useState("");
//   const [Searchedmeals, setSearchedmeals] = useState([]);
//   const [lastSearch, setLastSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   const persistedmeals = useRef([]);
//   const persistedsearch = useRef("");

//   const handleSearchInput = (event) => {
//     setSearchitem(event.target.value);
//   };

//   useEffect(() => {
//     if (persistedmeals.current.length > 0) {
//       setSearchedmeals(persistedmeals.current);
//       setLastSearch(persistedsearch.current);
//       setLoading(false);
//     } else {
//       const fetchDefault = async () => {
//         setLoading(true);
//         const promises = Array.from({ length: 15 }, () => defaultrecipe());
//         const defaultlist = await Promise.all(promises);
//         setSearchedmeals(defaultlist);
//         persistedmeals.current = defaultlist;
//         setLoading(false);
//       };
//       fetchDefault();
//     }
//   }, []);

//   const search = async (event) => {
//     if (event.key === "Enter") {
//       const item = Searchitem.trim();
//       if (!item) return;

//       setSearchitem("");
//       setLastSearch(item);
//       persistedsearch.current = item;

//       setLoading(true);
//       const result = await fetchRecipes(item);
//       if (!result || result.length === 0) {
//         setSearchedmeals([]);
//       } else {
//         setSearchedmeals(result);
//         persistedmeals.current = result;
//       }
//       setLoading(false);
//     }
//   };

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
//       {/* Search Input */}
//       <input
//         onKeyDown={search}
//         type="text"
//         value={Searchitem}
//         onChange={handleSearchInput}
//         className="sticky left-0 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         placeholder="Search for recipes here."
//       />

//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold text-slate-800 mb-4">
//           Recipes: {lastSearch || "Recommended"}
//         </h1>

//         {loading ? (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
//             {renderSkeletonCards()}
//           </div>
//         ) : Searchedmeals.length === 0 ? (
//           <h2 className="text-xl text-gray-500 mt-6">No Results Found</h2>
//         ) : (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
//             {Searchedmeals.map((meals, idx) => (
//               <Recipecard key={idx} meal={meals} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// import React, { useState, useEffect, useRef } from "react";
// import { fetchRecipes, defaultrecipe } from "../services/recipe";
// import Recipecard from "../components/Recipecard";
// import Sidebars from "../components/Sidebars";

// function HomePage() {
//   const [Searchitem, setSearchitem] = useState("");
//   const [Searchedmeals, setSearchedmeals] = useState([]);
//   const [lastSearch, setLastSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   const persistedmeals = useRef([]);
//   const persistedsearch = useRef("");

//   const handleSearchInput = (event) => {
//     setSearchitem(event.target.value);
//   };

//   useEffect(() => {
//     if (persistedmeals.current.length > 0) {
//       setSearchedmeals(persistedmeals.current);
//       setLastSearch(persistedsearch.current);
//       setLoading(false);
//     } else {
//       const fetchDefault = async () => {
//         setLoading(true);
//         const promises = Array.from({ length: 15 }, () => defaultrecipe());
//         const defaultlist = await Promise.all(promises);
//         setSearchedmeals(defaultlist);
//         persistedmeals.current = defaultlist;
//         setLoading(false);
//       };
//       fetchDefault();
//     }
//   }, []);

//   const search = async (event) => {
//     if (event.key === "Enter") {
//       const item = Searchitem.trim();
//       if (!item) return;

//       setSearchitem("");
//       setLastSearch(item);
//       persistedsearch.current = item;

//       setLoading(true);
//       const result = await fetchRecipes(item);
//       if (!result || result.length === 0) {
//         setSearchedmeals([]);
//       } else {
//         setSearchedmeals(result);
//         persistedmeals.current = result;
//       }
//       setLoading(false);
//     }
//   };

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
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebars />

//       {/* Main Content */}
//       <div className="flex-1 p-4 md:ml-64 mb-16">
//         {/* Search Input */}
//         <div className="sticky top-0 z-10 bg-white pb-4">
//           <input
//             onKeyDown={search}
//             type="text"
//             value={Searchitem}
//             onChange={handleSearchInput}
//             className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Search for recipes here."
//           />
//         </div>

//         <h1 className="text-2xl font-bold text-slate-800 mt-4 mb-2">
//           Recipes: {lastSearch || "Recommended"}
//         </h1>

//         {loading ? (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {renderSkeletonCards()}
//           </div>
//         ) : Searchedmeals.length === 0 ? (
//           <h2 className="text-xl text-gray-500 mt-6">No Results Found</h2>
//         ) : (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {Searchedmeals.map((meals, idx) => (
//               <Recipecard key={idx} meal={meals} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState, useEffect, useRef } from "react";
import { fetchRecipes, defaultrecipe,fetchRecipesbycategory,fetchRecipesbyingredient} from "../services/recipe";
import Recipecard from "../components/Recipecard";
import { FiSearch } from "react-icons/fi";

function HomePage() {
  const [Searchitem, setSearchitem] = useState("");
  const [Searchedmeals, setSearchedmeals] = useState([]);
  const [lastSearch, setLastSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0); 
  const [searchType, setSearchType] = useState("meal"); 
  const [noResults, setNoResults] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
const [typingTimeout, setTypingTimeout] = useState(null);
const [showSuggestions, setShowSuggestions] = useState(false);




  const isFetching = useRef(false); // avoid triggering scroll multiple times
  const isSearchMode = useRef(false);

  const handleSearchInput = (event) => {
    setSearchitem(event.target.value);
  };

  const handleInputChange = (e) => {
  const value = e.target.value;
  setSearchitem(value);
  localStorage.setItem("lastSearch", value); // save search term
  localStorage.setItem("lastSearchType", searchType);
  fetchSuggestions(value);
};
 
const handleSuggestionClick = (item) => {
  setSearchitem(item);
  setShowSuggestions(false);
};

const handleFocus = () => {
  setShowSuggestions(true);
  fetchSuggestions(Searchitem); // show default list if empty
};

const handleBlur = () => {
  setTimeout(() => setShowSuggestions(false), 150); // slight delay to allow click
};


  // Fetch initial 6 on load
  useEffect(() => {
  const fetchInitial = async () => {
    const savedSearch = localStorage.getItem("lastSearch");
    const savedType = localStorage.getItem("lastSearchType");

    if (savedSearch) {
      isSearchMode.current = true;
      setSearchitem(savedSearch);
      setSearchType(savedType || "meal");
      setLoading(true);

      const results = await performSearch(savedSearch, savedType || "meal");
      
      setSearchedmeals(initialBatch);
      setPage(1);
      setLoading(false);
    } else {
      setLoading(true);
      isSearchMode.current = false;

      const promises = Array.from({ length: 12 }, () => defaultrecipe());
      const defaultlist = await Promise.all(promises);
      setSearchedmeals(defaultlist);
      setPage(1);
      setLoading(false);
    }
  };

  fetchInitial();
}, []);



  // Scroll listener
  useEffect(() => {
    const handleScroll = async () => {

          const savedSearch = localStorage.getItem("lastSearch");
    const savedType = localStorage.getItem("lastSearchType");

    if (savedSearch) {
      return;
    } 
      else if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 800 &&
        !isFetching.current
      ) {
        
        loadMore();
      
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Load more recipes
  const loadMore = async () => {
    isFetching.current = true;

    if (isSearchMode.current && lastSearch) {
      const results = await fetchRecipes(lastSearch);
      if (results && results.length > 0) {
        const nextBatch = results.slice(page * 12, (page + 1) * 12);
        setSearchedmeals((prev) => [...prev, ...nextBatch]);
        setPage((prev) => prev + 1);
      }
    } else {
      const promises = Array.from({ length: 12 }, () => defaultrecipe());
      const newList = await Promise.all(promises);
      setSearchedmeals((prev) => [...prev, ...newList]);
      setPage((prev) => prev + 1);
    }

    isFetching.current = false;
  };


  useEffect(() => {
  const savedSearch = localStorage.getItem("lastSearch");
  const savedType = localStorage.getItem("lastSearchType");

  if (savedSearch) {
    setSearchitem(savedSearch);
    setSearchType(savedType || "meal");
    performSearch(savedSearch, savedType || "meal");
  }
}, []);



const performSearch = async (value, type) => {
  setLoading(true);
  setNoResults(false);
  let results = [];

  try {
    if (type === "meal") {
      results = await fetchRecipes(value);
    } else if (type === "category") {
      const categoryMeals = await fetchRecipesbycategory(value);
      results = await Promise.all(
        categoryMeals.map((meal) => fetchRecipes(meal.strMeal))
      );
      results = results.flat().filter(Boolean);
    } else if (type === "ingredient") {
      const ingredientMeals = await fetchRecipesbyingredient(value);
      results = await Promise.all(
        ingredientMeals.map((meal) => fetchRecipes(meal.strMeal))
      );
      results = results.flat().filter(Boolean);
    }

    if (results.length > 0) {
      setSearchedmeals(results);
      setLastSearch(value);
      isSearchMode.current = true;
      setNoResults(false);
    } else {
      setNoResults(true);
    }
  } catch (err) {
    console.error("Search failed:", err);
    setNoResults(true);
  } finally {
    setLoading(false);
  }
};

  


const search = async (e) => {
  if (e.key === "Enter") {
    localStorage.setItem("lastSearch", Searchitem);
    localStorage.setItem("lastSearchType", searchType);
    await performSearch(Searchitem, searchType);
  }
};




  const renderSkeletonCards = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="animate-pulse bg-white shadow-md rounded-lg p-4 space-y-4"
      >
        <div className="bg-gray-300 h-48 w-full rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    ));


    const fetchSuggestions = (value) => {
  if (typingTimeout) clearTimeout(typingTimeout);

  const timeout = setTimeout(async () => {
    const input = value.trim();
    if (!input && (searchType === 'category' || searchType === 'ingredient')) {
      // Default list
      if (searchType === 'category') {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
        const data = await res.json();
        setSearchSuggestions(data.meals.map((item) => item.strCategory));
      } else if (searchType === 'ingredient') {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
        const data = await res.json();
        setSearchSuggestions(data.meals.map((item) => item.strIngredient).slice(0, 20)); // limit to 20
      }
      return;
    }

    try {
      if (searchType === 'meal') {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
        const data = await res.json();
        if (data.meals) {
          setSearchSuggestions(
            data.meals.map((meal) => meal.strMeal)
          );
        } else {
          setSearchSuggestions([]);
        }
      } else if (searchType === 'category') {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
        const data = await res.json();
        const filtered = data.meals
          .map((item) => item.strCategory)
          .filter((category) => category.toLowerCase().includes(input.toLowerCase()));
        setSearchSuggestions(filtered);
      } else if (searchType === 'ingredient') {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
        const data = await res.json();
        const filtered = data.meals
          .map((item) => item.strIngredient)
          .filter((ing) => ing.toLowerCase().includes(input.toLowerCase()))
          .slice(0, 20);
        setSearchSuggestions(filtered);
      }
    } catch (err) {
      console.error("Suggestion Error:", err);
      setSearchSuggestions([]);
    }
  }, 300); // Debounce delay

  setTypingTimeout(timeout);
};

window.addEventListener("beforeunload", function () {
  localStorage.removeItem("lastSearch");
  localStorage.removeItem("lastSearchType");
});


return (
  <div className="p-6 max-w-screen-lg mx-auto relative">
    {/* Search Input and Dropdown Filter */}
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 w-full relative">
      <div className="relative w-full">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={Searchitem}
          onKeyDown={search}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={`Search by ${searchType}...`}
          className="pl-10 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Suggestions Dropdown */}
        {showSuggestions && searchSuggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-md w-full max-h-60 overflow-y-auto">
            {searchSuggestions.map((item, index) => (
              <li
                key={index}
                onMouseDown={() => handleSuggestionClick(item)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Dropdown Type Selector */}
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="border px-3 py-2 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="meal">Meal Name</option>
        <option value="category">Category</option>
        <option value="ingredient">Ingredient</option>
      </select>
    </div>

    {/* Heading */}
    <h1 className="text-2xl font-bold text-slate-800 mb-4">
      Recipes: {lastSearch || "Recommended"}
    </h1>

    {/* Content Display */}
    {loading ? (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {renderSkeletonCards()}
      </div>
    ) : noResults ? (
      <h2 className="text-xl text-gray-500 mt-6">No Results Found</h2>
    ) : (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Searchedmeals.map((meal, idx) => (
          <Recipecard key={idx} meal={meal} />
        ))}
      </div>
    )}
  </div>
);

}

export default HomePage;
