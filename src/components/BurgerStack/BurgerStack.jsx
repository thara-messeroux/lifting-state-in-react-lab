// src/components/BurgerStack/BurgerStack.jsx

// This component will be responsible for rendering
// the stack of ingredients that the user has chosen
// It will receive the list of ingredients as props from App.jsx


// This component shows the burger stack on the right side.
// It receives the selected ingredients from App.

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li
          key={index} // gives each list item a unique identity for React
          style={{ backgroundColor: ingredient.color }} // colors the ingredient row
        >
          {ingredient.name} {/* shows the selected ingredient name */}

          <button>
            X {/* this button will later remove the ingredient */}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
