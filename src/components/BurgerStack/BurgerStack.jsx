// src/components/BurgerStack/BurgerStack.jsx

// This component will be responsible for rendering
// the stack of ingredients that the user has chosen
// It will receive the list of ingredients as props from App.jsx

// This component shows the burger the user is building (right side)

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        // Loop through selected ingredients (stack)
        <li
          // Loop through selected ingredients (stack)
          key={index} // unique key for React 

          // Set the background color of each item to the ingredient's color
          style={{ backgroundColor: ingredient.color }} // same styling
        >
          // Loop through selected ingredients (stack)
          {ingredient.name} {/* show ingredient name */}

          <button>
            X {/* this will later REMOVE ingredient */}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
