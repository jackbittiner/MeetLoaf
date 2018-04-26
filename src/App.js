import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Sprint from "./components/sprint";
import Timer from "./components/timer";

const Header = () => <header />;

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
