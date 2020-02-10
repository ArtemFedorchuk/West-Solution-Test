import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
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

import LoginStyles from './ResetPasswordStyles';

const useStyles = makeStyles(LoginStyles);

const validator = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});

const ResetPassword = () => {
  const classes = useStyles();
  const formGroup = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validator,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card className={classes.card}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Reset Password
          </Typography>
          <form className={classes.form} onSubmit={formGroup.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              placeholder="Enter password"
              value={formGroup.values.password}
              onChange={formGroup.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={formGroup.values.password}
              onChange={formGroup.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.reset}
            >
              Reset
            </Button>

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

export default ResetPassword;
