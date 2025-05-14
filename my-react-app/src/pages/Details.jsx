import { useLocation } from "react-router-dom";

 function Details(){
    const location=useLocation()
    const meal=location.state?.meals;
    console.log(meal);
    const youtube="./youtube.png"
    const ingredients=[];
    const measures=[];
    let count=1
    
    while (true) {
        // Dynamically access properties
        const ing = meal[`strIngredient${count}`];
        const measure = meal[`strMeasure${count}`];
      
        if (ing && ing.trim() !== "") {
          // Add non-empty ingredients and measures to the arrays
          ingredients.push(ing);
          measures.push(measure || "");
        } else {
          // Break the loop if no ingredient is found
          break;
        }
      
        count++;
      }
      
      

console.log("Ingredients:", ingredients);
console.log("Measures:", measures);

    return(
        <div className="p-6 max-w-screen-lg mx-auto">
  {/* Image on the left, text and ingredients on the right in large screens */}
  <div className="flex flex-col md:flex-row items-center justify-between space-x-6">
    {/* Meal Image */}
    <div className="flex-shrink-0">
      <img
        src={meal.strMealThumb}
        alt="meal image"
        className="h-64 w-64 p-7 rounded-md shadow-lg md:h-80 md:w-80 lg:h-96 lg:w-96 lg:p-8"
      />
    </div>
    
    {/* Meal Details (h1, h2, YouTube, Ingredients) */}
    <div className="flex flex-col space-y-4 mt-4 md:mt-0 w-full md:w-2/3">
      {/* Header Section with YouTube Button */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{meal.strMeal}</h1>
          <h2 className="text-xl text-gray-600">{meal.strCategory}</h2>
        </div>
        
        {/* YouTube Button */}
        <div>
          <img
            onClick={() => window.open(meal.strYoutube, "_blank")}
            src={youtube}
            className="h-20 cursor-pointer my-2"
            alt="YouTube Link"
          />
        </div>
      </div>

      {/* Ingredients List */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Ingredients</h3>
        <ul className="mt-4 space-y-2">
          {ingredients.map((ingdt, idx) => {
            return (
              <li key={idx} className="flex justify-between items-center text-lg">
                <span>{ingdt}</span>
                <span>{measures[idx]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>

  {/* Instructions Section (Appears below ingredients in mobile view) */}
  <div className="mt-8">
    <h3 className="text-2xl font-semibold text-gray-800">Instructions</h3>
    <p className="mt-2 text-gray-700">{meal.strInstructions}</p>
  </div>
</div>


        

      
    );
 }
 export default Details;