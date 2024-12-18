import React from "react";
import ReactDOM from "react-dom/client"; // Ensure this is the correct import
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Correct usage for React 18
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
