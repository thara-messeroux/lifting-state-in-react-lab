# Lifting State in React Lab ✊🏾

## Overview
This project is a burger builder application built with React.

Users can:
- View a list of available ingredients
- Add ingredients to a burger stack
- Remove ingredients from the stack

The app demonstrates how to **lift state up** and share data between components.

---

## Setup Completed ✅

### Step 1 🐣 — Project Setup
- Created project using Vite
- Selected React + JavaScript
- Installed dependencies with `npm i`
- Started dev server with `npm run dev`

→ Why it matters:
- Sets up a modern React development environment

→ Engineering principle:
- Environment setup

---

### Step 2 🐢 — App Starter Code
- Replaced default `App.jsx`
- Added `availableIngredients` array
- Created base layout (`main`, `section`)

→ Why it matters:
- Provides the main data source for the app

→ Engineering principle:
- Single Source of Truth

---

### Step 3 🐙 — Styling Setup
- Replaced `App.css` with lab styles

→ Why it matters:
- Matches the expected UI layout from the lab

→ Engineering principle:
- Separation of concerns (styles vs logic)

---

### Step 4 🦁 — Component Structure
- Created `IngredientList` component
- Created `BurgerStack` component

→ Why it matters:
- Splits UI into reusable parts
- Prepares for state sharing

→ Engineering principle:
- Component-based architecture
- Separation of concerns

---

## Step 5 🐼 — Add Burger State

- Added `useState` to App component
- Created `stack` state to store selected ingredients

→ Why it matters:
- This is the data that changes when users add/remove ingredients
- It controls what appears in the burger stack

→ Engineering principle:
- State management → handling dynamic data in React

---

## Step 6 🐯 — Render Components

- Imported IngredientList and BurgerStack into App
- Rendered both components inside the section

→ Why it matters:
- Displays the UI structure of the app
- Connects all components to the main App

→ Engineering principle:
- Component composition → combining smaller components into a full UI

---

## Step 7 🐳 — Understanding Props Usage

- IngredientList receives all ingredients
- BurgerStack receives only selected ingredients (stack)

→ Why it matters:
- Each component gets only the data it needs

→ Engineering principle:
- Separation of concerns

---

## Step 8 🐧 — Render Ingredient Lists

- Mapped through ingredients in IngredientList
- Displayed each ingredient with name and color
- Added "+" button to each item
- Mapped through stack in BurgerStack
- Displayed each selected ingredient with "X" button

→ Why it matters:
- Converts data into visible UI
- Allows users to see ingredients and burger stack

→ Engineering principle:
- Rendering lists → dynamically generating UI from data

---

## Step 9 🐬 — Add Ingredients to Burger

- Created addToBurger function in App
- Passed function to IngredientList as props
- Connected "+" button to trigger state update

→ Why it matters:
- Enables user interaction
- Updates burger dynamically

→ Engineering principle:
- Lifting state → child triggers parent state change
- Event handling → responding to user actions

---

## Step 10 🐙 — Add Remove Function in App

- Added `removeFromBurger` function to `App`
- Used `filter()` to make a new stack without the clicked ingredient

→ Why it matters:
- This prepares the app to remove ingredients safely
- The parent still controls the shared burger state

→ Engineering principle:
- Immutability → create a new array instead of changing the old one
- State management → parent updates shared data

---

## Step 11 🐙 — Connect Remove Button

- Passed `removeFromBurger` from `App` to `BurgerStack`
- Removed an incorrect floating button from `App.jsx`
- Connected the `X` button so selected ingredients can be removed

→ Why it matters:
- The remove button needs access to the parent function
- This completes the add/remove interaction in the app

→ Engineering principle:
- Props → passing functions from parent to child
- Event handling → clicking a button updates state
- Lifting state → the parent owns and updates shared data

---

## Key Concepts

- **Component** → reusable UI building block
- **Props** → data passed from parent to child
- **State** → data that changes over time
- **Lifting State** → moving shared state to a parent component

---

## Final Goal 🎯
- Build a fully functional burger stacker
- Share state between components
- Add and remove ingredients dynamically
- Create a reusable `Ingredient` component (Level Up)

---

## Key Takeaways

- React apps are built using small reusable components
- Data should live in one place (single source of truth)
- State is lifted to allow multiple components to stay in sync
- UI updates automatically when state changes
