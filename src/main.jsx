/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import App2 from "./App2.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './Store/Store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store} > <Router>
    <App2 />
  </Router></Provider>
 
);
