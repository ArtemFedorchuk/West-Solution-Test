import React from 'react';

import {Route, Switch} from "react-router-dom";

import Routes from "./constants/routes";
import './App.css';

import {
    Categories,
    ErrorPage,
    LoginContainer
} from "./components";

const App = () => {
  return (
      <div className="App">
          <Switch>
              <Route path={Routes.CATEGORIES} component={Categories} />
              <Route exact path={Routes.INDEX} component={LoginContainer} />
              <Route exact path={Routes.LOGIN} component={LoginContainer} />
              <Route  render={() => <ErrorPage />} />
          </Switch>
      </div>
  );
};

export default App;