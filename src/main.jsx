import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./pages/App.jsx";
// import ErrorPage from "./pages/ErrorPage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio"> {/* ✅ Must match repo name */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
