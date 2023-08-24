import "./App.css";
import foodsJson from "./foods.json";
import {useState} from "react"

import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";


function App() {

  const [food, setFood] =useState(foodsJson)

  const [foodRendered, setFoodRendered] = useState (food)

  console.log (food)
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
} } 
/> */}

{/* <FoodBox food={food} /> */}
<AddFoodForm food ={food} setFood={setFood} setFoodRendered={setFoodRendered} />
<FoodList foodRendered={foodRendered} setFoodRendered={setFoodRendered} />


    </div>
  );
}

export default App;
