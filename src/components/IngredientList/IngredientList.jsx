// src/components/IngredientList/IngredientList.jsx

// This component will be responsible for rendering 
// the list of available ingredients
// It will receive the list of ingredients as props from App.jsx

// This component shows ALL available ingredients (left side)

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        // Loop through each ingredient and display it
        <li
          key={index} // React needs a unique key for each item
          // Set the background color of each item to the ingredient's color
          style={{ backgroundColor: ingredient.color }} // color each item
        >
          {ingredient.name} {/* show ingredient name */}
          
          <button>
            + {/* this will later ADD ingredient to burger */}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;