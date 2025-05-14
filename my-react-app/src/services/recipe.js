import axios from "axios";



export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};


export const fetchRecipes_by_id = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(response.data.meal);
    return response.data.meals[0];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};


export const defaultrecipe = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    console.log(response.data.meals[0]);
    return response.data.meals[0];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};



