import React from 'react';
import { Link } from 'react-router-dom';

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

const useStyles = makeStyles(LoginStyles);

const Login = ({focusHandler, ...rest}) => {
    const classes = useStyles();

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
                            onFocus={focusHandler}
                            // onChange={rest.updateUserHandler}
                            // onChange={e => console.log('name => ', e.currentTarget.value)}
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
                            // onChange={rest.updateUserHandler}
                            // onChange={e => console.log('password => ', e.currentTarget.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.signIn}
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
                                type="submit"
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
                                type="submit"
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

export default Login;
