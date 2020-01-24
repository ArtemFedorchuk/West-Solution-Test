import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import MUiContainer from '@material-ui/core/Container';

import ContainerStyles from './ContainerStyles';

const useStyles = makeStyles(ContainerStyles);

const Container = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <MUiContainer classes={classes} {...rest}>
      {children}
    </MUiContainer>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
