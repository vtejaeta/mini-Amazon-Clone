import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "../components/Login.js";
import { auth } from "../firebase/firebase.js";
import { useStateValue } from "../context/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user just logged in / user was logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //user was logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
