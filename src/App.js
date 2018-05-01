import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Sprint from "./components/sprint";
import Timer from "./components/timer";
import "./App.css";

const Header = () => (
  <header className="item-1">
    <Link to="/">Home</Link>
    <Link to="/current-sprint">Current Sprint</Link>
  </header>
);

const Main = () => (
  <main className="item-2">
    <Switch>
      <Route exact path="/" component={Timer} />
      <Route exact path="/current-sprint" component={Sprint} />
    </Switch>
  </main>
);

const App = () => (
  <div className="grid-1">
    <Header />
    <Main />
  </div>
);

export default App;
