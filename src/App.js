import React from 'react';

import {Route, Switch} from "react-router-dom";

import Routes from "./constants/routes";
import './App.css';

import {
    Categories,
    Login
} from "./components";

const App = () => {
  return (
      <div className="App">
          <Switch>
              <Route path={Routes.CATEGORIES} component={Categories} />
              <Route path={Routes.INDEX} component={Login} />
              <Route path={Routes.LOGIN} component={Login} />
          </Switch>
      </div>
  );
};

export default App;