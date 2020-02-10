import React from 'react';
// import * as yup from 'yup';
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

import LoginStyles from './ForgotPasswordStyles';

const useStyles = makeStyles(LoginStyles);

// const validator = yup.object().shape({
//   email: yup
//     .string()
//     .email()
//     .required(),
// });

const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card className={classes.card}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Forgot Password
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.forgotPassword}
            >
              Send
            </Button>

            <div className={classes.line} />

            <Row className={classes.links}>
              <Column>
                <Link to="/reset-password" className={classes.activeLink}>
                  Reset password?
                </Link>
              </Column>
            </Row>
          </form>
        </Card>
      </div>
    </Container>
  );
};

export default ForgotPassword;
