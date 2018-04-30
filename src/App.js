import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Sprint from "./components/sprint";
import Timer from "./components/timer";

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/current-sprint">Current Sprint</Link>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Timer} />
      <Route exact path="/current-sprint" component={Sprint} />
    </Switch>
  </main>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;
