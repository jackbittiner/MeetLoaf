import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import CurrentSprintPage from "./routes/current-sprint-page/index";
import TimerPage from "./routes/timer-page/index";
import SprintsPage from "./routes/sprints-page/index";
import SprintPageContainer from "./routes/current-sprint-page/components/sprint-page-container";
import "./app.css";

const Header = () => (
  <header className="header">
    <div className="headerItems">
      <Link className="headerItem" to="/">
        Home
      </Link>
      <Link className="headerItem" to="/current-sprint">
        Current Sprint
      </Link>
      <Link className="headerItem" to="/sprints">
        Sprints
      </Link>
    </div>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={TimerPage} />
      <Route exact path="/current-sprint" component={CurrentSprintPage} />
      <Route exact path="/sprints" component={SprintsPage} />
      <Route path="/sprint" component={SprintPageContainer} />
    </Switch>
  </main>
);

const App = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

export default App;
