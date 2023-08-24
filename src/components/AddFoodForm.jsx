import { useState } from "react"

function AddFoodForm(props) {
    const [nameInput, setNameInput] = useState("");

    const handleNameChange = (e) => {
        console.log(event.target.value)
        setNameInput(event.target.value)
    }

    const [imageInput, setImageInput] = useState ("")

    const handleImageInput = (e) => {
        console.log(event.target.value)
        setImageInput(event.target.value)
    }

    const [caloriesInput, setCaloriesInput] = useState (0)

    const handleCaloriesInput = (e) => {
        console.log(event.target.value)
        setCaloriesInput(event.target.value)
    }

    const [servingsInput, setSetvingsInput] = useState (0)

    const handleServingsInput = (e) => {
        console.log(event.target.value)
        setSetvingsInput(event.target.value)
    }

    const handleSubmitForm = (e) => {
    //so as not to refresh the page 
    event.preventDefault();

    let newFood = {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput
    };

    let clone = [...props.food];
    clone.push(newFood)
    props.setFood(clone)
    props.setFoodRendered(clone)

    }


  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="name">Name <span /></label>
            <input type="text" name="name" onChange={handleNameChange} value={nameInput} />
            <br />
            <label htmlFor="image">Image <span /> </label>
            <input type="text" name="image" onChange={handleImageInput} value={imageInput} />
            <br />
            <label htmlFor="calories">Calories <span /> </label>
            <input type="number" name="calories" onChange={handleCaloriesInput} value={caloriesInput} />
            <br />
            <label htmlFor="servings">Servings <span /> </label>
            <input type="number" name="servings" onChange={handleServingsInput} value={servingsInput}  />
            <br />
            <button>Create</button>



        </form>


    </div>
  )
}

export default AddFoodForm