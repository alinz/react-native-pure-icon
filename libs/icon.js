import React, { Component } from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

export default class Icon extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { type, font, style } = this.props;
    return <Text style={[style, { fontFamily: font }]}>{type}</Text>;
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  style: PropTypes.any,
};
