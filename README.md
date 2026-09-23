# Dev Stack Builder

## Description
Dev Stack Builder is a React + TypeScript web app that helps developers explore popular frontend, backend, database, and tooling technologies, and build their own personalized development stack by adding and removing tools from an interactive list.

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- JSON

## Features
- Browse 12+ development technologies with details like category, difficulty, and rating
- Add and remove technologies dynamically to build a personalized tech stack
- Get instant toast notifications for add, remove, duplicate, and clear actions

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code inside JavaScript. It's used in React because it makes UI structure easier to read and write, and it gets compiled into regular JavaScript function calls under the hood.

**2. What is the difference between props and state?**
Props are data passed from a parent component to a child component and are read-only inside the child. State is data managed inside a component itself, which can change over time and cause the component to re-render.

**3. What does the useState hook do, and where did you use it in this project?**
useState lets a component store and update its own data. In this project, I used it to manage `technologies`, `stack`, and `loading` in App.tsx.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect runs side effects like data fetching after a component renders. I used it to fetch data.json once when the app loads, and to update the `technologies` state with the result.

**5. Why does every item in a .map() list need a unique key prop?**
The key prop helps React identify which items changed, were added, or removed, so it can update the DOM efficiently instead of re-rendering the whole list.

**6. What is conditional rendering? Give an example from this project.**
Conditional rendering means showing different UI based on a condition. In this project, I used it to show a loading spinner while data is fetching, and to show "Your stack is empty" when the stack array has no items.

**7. How do you pass data from a parent to a child, and how does a child send something back to the parent?**
Data is passed from parent to child using props. To send data back, the parent passes a function as a prop, and the child calls that function with the data it wants to send, which then updates the parent's state.