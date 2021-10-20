import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import PetDetailMain from "./components/PetDetailMain";
import { updateTheme } from "./utilities/themeChange";
import { Adopt } from "./pages/Adopt";
import Profile from "./pages/Profile";

const App = () => {
  updateTheme();

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
          <Route exact path="/adopt">
            <Adopt />
          </Route>
          <Route exact path="/petdetail/:id">
            <PetDetailMain />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
