import React from 'react';
import PropTypes from 'prop-types';

require('./Affix.scss');

const Affix = props => <div {...props} />;

Affix.propsTypes = {
  bottom: PropTypes.number, // px
  top: PropTypes.number, // px
};

export default Affix;
