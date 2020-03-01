import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import Routes from "../../constants/routes";
import { Container, Row, Column } from "../../components";
import {
  Button,
  CssBaseline,
  TextField,
  Card,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginStyles from "./LoginStyles";

// @ts-ignore
const useStyles = makeStyles(LoginStyles);

type LoginPropTypes = {
  isAuth: boolean,
  userName: string,
  password: string,
  onNameChange: () => void,
  onPasswordChange: () => void
};

const Login: React.FC<LoginPropTypes> = ({
  isAuth,
  userName,
  password,
  onNameChange,
  onPasswordChange,
}) => {
  const classes = useStyles();

  const [isAuthUser, setAuth] = useState(isAuth);
  const [isAlert, setAlert] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const [values, setValues] = React.useState( true );

  const handleClickShowPassword = () => {
    setValues(!values);
  };

  useEffect(() => {
    setTimeout(() => setAlert(false), 6000);
  });

  const authUserHandler = () => {
    setAuth(true);
  };

  const handlerAlert = (typeModal: any, textModal: string) => {
    // @ts-ignore
    setAlert(alertModal(typeModal, textModal));
  };

  const onSubmit = (data: any) => {
    // console.log(data);
  };

  const signInHandler = (typeModal: any, textModal: string) => {
    authUserHandler();
    handlerAlert(typeModal, textModal);
  };

  function alertModal(typeModal: any, textModal: string) {
    return (
      <Alert variant="filled" severity={typeModal} className={classes.alert}>
        {textModal}
      </Alert>
    );
  }

  if (userName === "admin" && password === "12345" && isAuthUser)
    return <Redirect to={Routes.NEWS} />;

  return (
    <Container component="main" maxWidth="xs">
      {isAuthUser
        ? userName === "admin" && password === "12345"
          ? null
          : isAlert
        : null}
      <CssBaseline />
      <div className={classes.paper}>
        <Card className={classes.card}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Sign in to West Solutions
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              name="firstName"
              type="text"
              autoComplete="name"
              autoFocus
              placeholder="Enter user name"
              value={userName}
              onChange={onNameChange}
              error={!!errors.firstName}
              inputRef={register({
                required: true,
                pattern: /^[A-Za-z]+$/i,
                minLength: 4,
                maxLength: 6
              })}
            />
            <TextField
              className={classes.fieldPassword}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              type={values ? "password" : "text"}
              id="password"
              autoComplete="current-password"
              placeholder="Enter password"
              value={password}
              onChange={onPasswordChange}
              error={!!errors.password}
              inputRef={register({
                required: true,
                pattern: /^[ 0-9]+$/i,
                min: 6,
                max: 12
              })}
            />
            <IconButton
              className={classes.visible}
              edge="end"
              onClick={handleClickShowPassword}
            >
              {values ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signIn}
              type="submit"
              onClick={() => signInHandler('error', 'Error, login or password!')}
            >
              Sign In
            </Button>

            <Row className={classes.alignElement}>
              <Column>
                <span className={classes.or}>OR</span>
              </Column>
            </Row>
            <>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submitGoogle}
                onClick={() => signInHandler('warning', 'Warnig! not connect to Google')}
              >
                Sign in with Google
              </Button>
            </>

            <>
              <Button
                fullWidth
                variant="contained"
                className={classes.submitFacebook}
                onClick={() => signInHandler('warning', 'Warning! not connect to Facebook')}
              >
                Sign in with Facebook
              </Button>
            </>

            <div className={classes.line} />

            <Row className={classes.links}>
              <Column>
                <Link to="/forgot-password" className={classes.activeLink}>
                  Forgot password?
                </Link>
              </Column>
              <Column>
                <Link to="/sign-up" className={classes.activeLink}>
                  Don&apos;t have an account? Sign Up
                </Link>
              </Column>
            </Row>
          </form>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
