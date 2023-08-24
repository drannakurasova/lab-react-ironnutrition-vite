// import { useState } from "react"

function FoodBox(props) {
    // console.log ("foodbox props", props )

    // const [foodRenderedToDelete, setFoodRenderedToDelete] = useState(foodToDelete)

    // const handleDeleteFood = (i) => {
    //     // console.log("deleteing", "id", props.id, "i", i)
    //     console.log("deleting again",i)
        
    //     let clonedFoodToDelete = JSON.parse(JSON.stringify(foodRenderedToDelete));
    //     clonedFoodToDelete.splice(i,1);
    //     setFoodRenderedToDelete(clonedFoodToDelete)


    
  return (
    <div>
        
        {/* {props.food.map((eachFood, i) => {
            // console.log ("each food", eachFood)
            return (
               <div> 
                <hr />
                <p>NAME: {eachFood.name} </p>

                <img src={eachFood.image} width="200px"/>

                <p>Calories:  {eachFood.calories}</p>
                <p>Servings {eachFood.servings}</p>

                 <p>
                 <b>Total Calories: {eachFood.calories*eachFood.servings} </b> kcal
                </p>

                 <button>Delete</button>
                </div>
                )
            }  )} */}


                <hr />
                <p>NAME: {props.name} </p>

                <img src={props.image} width="200px"/>

                <p>Calories:  {props.calories}</p>
                <p>Servings {props.servings}</p>

                 <p>
                 <b>Total Calories: {props.calories*props.servings} </b> kcal
                </p>

                 {/* <button onClick={() => handleDeleteFood (props.id) } >Delete</button> */}
                </div>
          )
            }  
 
      


export default FoodBox;
