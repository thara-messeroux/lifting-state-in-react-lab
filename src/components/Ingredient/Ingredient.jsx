// This component represents ONE ingredient row (reusable)
// It shows the name, color, and a button (+ or X)

const Ingredient = (props) => {
  return (
    <li
      style={{ backgroundColor: props.ingredient.color }} // color of ingredient
    >
      {props.ingredient.name} {/* display name */}
      <button onClick={props.onClick}>
        {props.buttonLabel} {/* "+" or "X" */}
      </button>
    </li>
  );
};

export default Ingredient;
