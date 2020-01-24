import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const Column = ({ children, ...rest }) => (
  <Grid {...rest} item>
    {children}
  </Grid>
);

Column.propTypes = {
  children: PropTypes.node,
};

Column.defaultProps = {
  children: null,
};

export default Column;
