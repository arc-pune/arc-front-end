import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import PetDetailMain from "./components/PetDetailMain";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/petdetail/:id">
            <PetDetailMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
