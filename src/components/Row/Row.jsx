import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const Row = ({ children, ...rest }) => (
  <Grid {...rest} container>
    {children}
  </Grid>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
