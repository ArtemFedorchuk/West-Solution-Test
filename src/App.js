import React from "react";

import { Route, Switch } from "react-router-dom";

import Routes from "./constants/routes";
import "./App.css";

import {
  Categories,
  ErrorPage,
  LoginContainer,
  SignUp,
  ResetPassword,
  ForgotPassword
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={Routes.CATEGORIES} component={Categories} />
        <Route exact path={Routes.INDEX} component={LoginContainer} />
        <Route exact path={Routes.SIGN_UP} component={SignUp} />
        <Route exact path={Routes.RESET_PASSWORD} component={ResetPassword} />
        <Route exact path={Routes.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={Routes.LOGIN} component={LoginContainer} />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
};

export default App;
