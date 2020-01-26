import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Alert from '@material-ui/lab/Alert';
import {
    Button,
    CssBaseline,
    TextField,
    Card,
    Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Row, Column } from '../../components';

import LoginStyles from './LoginStyles';
import Routes from "../../constants/routes";

const useStyles = makeStyles(LoginStyles);

const Login = ({
    isAuth,
    userName,
    password
}) => {
    const classes = useStyles();

    const [loginForm, setLogin] = useState('');
    const [passwordForm, setPassword] = useState('');
    const [isAuthUser, setAuth] = useState(isAuth);
    const [isAlert, setAlert] = useState(false);

    function alertModal() {
        return <Alert variant="filled" severity="error" className={classes.alert}>Error, login or password! </Alert>
    }

    useEffect(() => {
        setTimeout(() =>  setAlert(false), 6000);
    });

    const loginHandler = (e) => {
        setLogin(e.currentTarget.value)
    };
    const passwordHandler = (e) => {
        setPassword(e.currentTarget.value)
    };
    const authUserHandler = () => {
        setAuth(true)
    };
    const handlerAlert = () => {
        setAlert(alertModal)
    };

    if(userName === loginForm && password === passwordForm && isAuthUser) return <Redirect to={Routes.PROFILE} />;

    return (
        <Container component="main" maxWidth="xs">
            {isAuthUser ?
                userName === loginForm && password === passwordForm ? null``
                    : (
                        isAlert
                    )
                :
                null
            }
            <CssBaseline />
            <div className={classes.paper}>
                <Card className={classes.card}>
                    <Typography component="h1" variant="h5" className={classes.title}>
                        Sign in to West Solutions
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            name="firstName"
                            type="text"
                            autoComplete="name"
                            autoFocus
                            placeholder="Enter user name"
                            onChange={loginHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            placeholder="Enter password"
                            onChange={passwordHandler}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.signIn}
                            onClick={() => `${authUserHandler()} ${handlerAlert()}`}
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
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submitGoogle}
                            >
                                Sign in with Google
                            </Button>
                        </>

                        <>
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submitFacebook}
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
                                <Link to="/registration" className={classes.activeLink}>
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

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        password: state.auth.password,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {})(Login);

Login.propTypes = {
    isAuth: PropTypes.bool,
    userName: PropTypes.string,
    password: PropTypes.string
};

Login.defaultProps = {
    isAuth: false,
    userName: 'admin',
    password: '12345',
};