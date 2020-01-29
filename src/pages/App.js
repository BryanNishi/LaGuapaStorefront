import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Store from "./store.js";
import Cart from "./cart.js";
import Login from "./login.js";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Store} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
