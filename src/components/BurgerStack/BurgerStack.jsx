// src/components/BurgerStack/BurgerStack.jsx

// This component will be responsible for rendering
// the stack of ingredients that the user has chosen
// It will receive the list of ingredients as props from App.jsx


// This component shows the burger stack on the right side.
// It receives the selected ingredients from App.

import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          buttonLabel="X"
          onClick={() => props.removeFromBurger(index)}
        />
      ))}
    </ul>
  );
};

export default BurgerStack;
