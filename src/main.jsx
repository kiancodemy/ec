import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Createcontext from "./components/context/Createcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Createcontext>
      <App />
    </Createcontext>
  </React.StrictMode>
);
