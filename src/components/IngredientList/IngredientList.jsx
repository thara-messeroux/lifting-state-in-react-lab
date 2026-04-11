// src/components/IngredientList/IngredientList.jsx

// This component shows all available ingredients on the left side.
// It receives the ingredient list and the add function from App.

import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          buttonLabel="+"
          onClick={() => props.addToBurger(ingredient)}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
