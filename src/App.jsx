// src/App.jsx

import { useState } from "react"; // lets React track changing data
import "./App.css";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";

const App = () => {
  // This is the full list of ingredient options.
  // It stays fixed and does not change.
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "limegreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  // stack = the burger the user is building
  // setStack = the tool used to update the burger
  const [stack, setStack] = useState([]);

  // This function adds one ingredient to the burger.
  // We make a new array so React notices the change and updates the screen.
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  // This function removes one ingredient from the burger.
  // We remove it by its position in the stack.
  const removeFromBurger = (indexToRemove) => {
    const newStack = stack.filter((_, index) => index !== indexToRemove);
    // Keep every ingredient except the one we clicked

    setStack(newStack);
    // Update the burger with the new list
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {/* Left side: shows all available ingredients */}
        <IngredientList
          ingredients={availableIngredients}
          addToBurger={addToBurger}
        />

        {/* Right side: shows the burger the user is building */}
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
