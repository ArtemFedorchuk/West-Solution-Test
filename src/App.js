import React from 'react';

import {Route, Switch} from "react-router-dom";

import Routes from "./constants/routes";
import './App.css';

import {
    Categories,
    ErrorPage,
    Login
} from "./components";

const App = () => {
  return (
      <div className="App">
          <Switch>
              <Route path={Routes.CATEGORIES} component={Categories} />
              <Route exact path={Routes.INDEX} component={Login} />
              <Route exact path={Routes.LOGIN} component={Login} />
              <Route  render={() => <ErrorPage />} />
          </Switch>
      </div>
  );
};

export default App;