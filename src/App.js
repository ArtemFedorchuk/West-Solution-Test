import React from 'react';

import {Route, Switch} from "react-router-dom";

import Routes from "./constants/routes";
import './App.css';

import {
    Categories,
    LoginContainer
} from "./components";

const App = () => {
  return (
      <div className="App">
          <Switch>
              <Route path={Routes.CATEGORIES} component={Categories} />
              <Route path={Routes.INDEX} component={LoginContainer} />
              <Route path={Routes.LOGIN} component={LoginContainer} />
          </Switch>
      </div>
  );
};

export default App;