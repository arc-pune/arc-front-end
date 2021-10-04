import React from "react";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from './pages/signup';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
