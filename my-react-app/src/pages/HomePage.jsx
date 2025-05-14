import React, { useState,useEffect,useRef } from "react";
import { fetchRecipes,defaultrecipe } from "../services/recipe";
import Recipecard from "../components/Recipecard";

function HomePage() {
   
    const [Searchitem, setSearchitem] = useState("");
    const [Searchedmeals, setSearchedmeals] = useState([]);
    const [lastSearch, setLastSearch] = useState("");
   
    const handlessearch = (event) => {
        setSearchitem(event.target.value);
    };
    const persistedmeals=useRef([]);
    const persistedsearch=useRef("")    

    useEffect(() => {
        console.log(persistedmeals.current.length>0)
        if (persistedmeals.current.length>0){
            setSearchedmeals(persistedmeals.current)
            setLastSearch(persistedsearch.current)
            console.log(persistedmeals.current)
            
        }
        else{
        const fetchDefault = async () => {
            const promises = Array.from({ length: 15 }, () => defaultrecipe()); // Create 15 promises
            const defaultlist = await Promise.all(promises); // Resolve all promises concurrently
            console.log(defaultlist);
            setSearchedmeals(defaultlist);
            persistedmeals.current=defaultlist;
        };
    
        fetchDefault();
    }}, []);
    const search = async (event) => {
        if (event.key === "Enter") {
            const item = Searchitem.trim();
            if (!item) return; // Prevent empty search

            console.log(item);
            setSearchitem("");
            setLastSearch(item);
            persistedsearch.current=item; // Update the last searched term

            const result = await fetchRecipes(item);
            console.log(result);

            if (!result || result.length === 0) {
                setSearchedmeals([]); // Update state to indicate no results
            } else {
                setSearchedmeals(result);
                persistedmeals.current=result;
               
            }
        }
    };

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            {/* Search Input */}
            <input
                onKeyDown={search}
                type="text"
                value={Searchitem}
                onChange={handlessearch}
                className="sticky left-0 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search for recipes here."
            />

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-slate-800">
                    Recipes: {lastSearch || "Recommended"}
                </h1>
                

                {/* Render Results or No Results */}
                {Searchedmeals.length === 0 ? (
                    <h2 className="text-xl text-gray-500 mt-6">No Results Found</h2>
                ) : (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                        {Searchedmeals.map((meals, idx) => (
                            <Recipecard key={idx} meal={meals} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
