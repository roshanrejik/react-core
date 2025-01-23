// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Define the App component
function App() {
  return <h1>Hello World</h1>;
}

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
