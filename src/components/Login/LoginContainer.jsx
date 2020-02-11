import React from "react";
import { connect } from "react-redux";
import { Login } from "../index";
import { setAuthUserName, setAuthUserPassword } from "../../store/Auth/actions";

const LoginContainer = props => {
  const onNameChange = e => {
    props.setAuthUserName(e.target.value);
  };
  const onPasswordChange = e => {
    props.setAuthUserPassword(e.target.value);
  };

  return (
    <Login
      userName={props.userName}
      password={props.password}
      isAuth={props.isAuth}
      onNameChange={onNameChange}
      onPasswordChange={onPasswordChange}
    />
  );
};

const mapStateToProps = state => {
  return {
    userName: state.auth.userName,
    password: state.auth.password,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = {
  setAuthUserName,
  setAuthUserPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
