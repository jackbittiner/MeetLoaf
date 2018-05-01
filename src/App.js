import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import SprintPage from "./routes/current-sprint-page/index";
import TimerPage from "./routes/timer-page/index";
import SprintsPage from "./routes/sprints-page/index";
import "./App.css";

const Header = () => (
  <header className="item-1">
    <Link to="/">Home</Link>
    <Link to="/current-sprint">Current Sprint</Link>
    <Link to="/sprints">Sprints</Link>
  </header>
);

const Main = () => (
  <main className="item-2">
    <Switch>
      <Route exact path="/" component={TimerPage} />
      <Route exact path="/current-sprint" component={SprintPage} />
      <Route exact path="/sprints" component={SprintsPage} />
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
