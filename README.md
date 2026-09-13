# Dev Stack Builder

A web application designed for developers to explore modern technologies, compare frameworks, and assemble their ideal tech stack.

## Features
- **Interactive Tech Catalog:** Browse and evaluate technologies across multiple categories with difficulty levels and user ratings.
- **Custom Stack Builder:** Dynamically add, review, and clear tech choices in a sidebar panel with duplicate prevention.
- **Real-time Notifications:** Toast feedback for user interaction using `react-toastify`.

## Tech Stack
- React 19
- Vite
- Tailwind CSS & DaisyUI
- React-Toastify

---

## React Conceptual Questions

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like elements directly inside JavaScript code. It makes UI structures easier to write, read, and maintain.

### 2. What is the difference between props and state?
- **Props** (short for properties) are read-only inputs passed from a parent component to a child component to convey data.
- **State** is internal data managed within a component that can change over time based on user interactions.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook declares reactive state variables. In this project, it was used in `App.jsx` to maintain the loaded technologies list, the active technology stack, and the loading state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in components. It was used in `App.jsx` to run an asynchronous `fetch` call that retrieves `technologies.json` once when the component mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React relies on unique `key` props to track list items across renders. This optimizes DOM updates and prevents bugs when elements are reordered, added, or deleted.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering lets components display different UI elements depending on current state values. In `YourStack.jsx`, it renders an empty message when `stack.length === 0` and renders the selected items list when items exist.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- Parent to Child: Data is passed down via `props`.
- Child to Parent: The parent passes a callback function down via `props`, and the child calls that function with arguments to pass data back up.