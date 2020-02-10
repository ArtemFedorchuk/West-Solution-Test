import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  CssBaseline,
  TextField,
  Card,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Row, Column,} from '../../components';

import SignUpStyles from './SignUpStyle';

const useStyles = makeStyles(SignUpStyles);

const SignUp = () => {
  const classes = useStyles();
  const [isSubmitted, setSubmitted] = useState(false);
  console.log(setSubmitted)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card className={classes.card}>
          {isSubmitted ? (
            <Typography
              component="h1"
              variant="h5"
              className={classes.confirmMessage}
            >
              {`Please confirm your email`}
            </Typography>
          ) : (
            <>
              <Typography component="h1" variant="h5" className={classes.title}>
                Sign up to West Solutions
              </Typography>
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="Enter email"
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
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  placeholder="Confirm password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.signIn}
                >
                  Sign Up
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
                    Sign up with Google
                  </Button>
                </div>

                <div>
                  {/*<FacebookButton />*/}
                </div>

                <div className={classes.line} />

                <Row className={classes.links}>
                  <Column>
                    <Link to="/login" className={classes.activeLink}>
                      Have an account? Sign In
                    </Link>
                  </Column>
                </Row>
              </form>
            </>
          )}
        </Card>
      </div>
    </Container>
  );
};

export default SignUp;
