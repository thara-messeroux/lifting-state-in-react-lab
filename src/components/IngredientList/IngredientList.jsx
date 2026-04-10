// src/components/IngredientList/IngredientList.jsx

// This component shows all available ingredients on the left side.
// It receives the ingredient list and the add function from App.

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li
          key={index} // gives each list item a unique identity for React
          style={{ backgroundColor: ingredient.color }} // colors the ingredient row
        >
          {ingredient.name} {/* shows the ingredient name */}
          <button onClick={() => props.addToBurger(ingredient)}>
            + {/* sends this ingredient up to App so it can be added */}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
