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