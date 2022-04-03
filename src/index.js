import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import './index.css';
import { FilterProvider } from "./context/filter-context";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
      <App/>
    
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
