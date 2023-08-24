import FoodBox from "./FoodBox"
import { useState } from "react"

//? PROBLEM HERE! I DON¨T SEE HOW RENDER ONE STATE, DELETE FROM IT, AND RENDER IT UPDATED

function FoodList(props) {
    console.log("food list", props.foodRendered)

    const [foodToDelete, setFoodToDelete] = useState (props.foodRendered)
    console.log("to delete", foodToDelete)

    const handleDeleteFood = (i) => {
        // console.log("deleteing", "id", props.id, "i", i)
        console.log("deleting again",i)
        
        let clonedFoodToDelete = JSON.parse(JSON.stringify(foodToDelete));
        clonedFoodToDelete.splice(i,1);
        setFoodToDelete(clonedFoodToDelete)

    
        // foodToDelete.splice(i,1);
        // setFoodToDelete(foodToDelete)

}

    return (
    <div>
        <h3>PRODUCT LIST </h3>
        {props.foodRendered.map((eachFood, i) => {
            return (
                <div>
                <FoodBox key={i} name={eachFood.name} image={eachFood.image} calories={eachFood.calories} servings={eachFood.servings} />
                <span>
                <button onClick={() => handleDeleteFood (i) } >Delete</button>
                </span>
                </div>
            )
            

        } )}

    </div>
  )
}

export default FoodList