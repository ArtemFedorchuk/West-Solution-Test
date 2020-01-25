import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

// import {useFormik} from "formik";
// import * as yup from "yup";

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

// const validator = yup.object().shape({
//     email: yup
//         .string()
//         .email()
//         .required(),
//     password: yup.string().required(),
// });

const Login = ({
    isAuth,
    userName,
    password
}) => {
    const classes = useStyles();
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //     },
    //     validationSchema: validator,
    // });

    const [loginForm, setLogin] = useState('');
    const [passwordForm, setPassword] = useState('');
    const [isAuthUser, setAuth] = useState(isAuth);

    const loginHandler = (e) => {
        setLogin(e.currentTarget.value)
    };
    const passwordHandler = (e) => {
        setPassword(e.currentTarget.value)
    };
    const authUserHandler = () => {
        setAuth(true)
    };

    if(userName === loginForm && password === passwordForm && isAuthUser === true) return <Redirect to={Routes.PROFILE} />;

    return (
        <Container component="main" maxWidth="xs">
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
                            name="name"
                            autoComplete="name"
                            autoFocus
                            placeholder="Enter user name"
                            onChange={loginHandler}
                            // value={formik.values.email}
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
                            // value={formik.values.password}

                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.signIn}
                            onClick={authUserHandler}
                        >
                            Sign In
                        </Button>

                        <Row className={classes.alignElement}>
                            <Column>
                                <span className={classes.or}>OR</span>
                            </Column>
                        </Row>
                        <div>
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submitGoogle}
                            >
                                Sign in with Google
                            </Button>
                        </div>

                        <div>
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submitFacebook}
                            >
                                Sign in with Facebook
                            </Button>
                        </div>

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
