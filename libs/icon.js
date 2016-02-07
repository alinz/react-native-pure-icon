import React, { Component, Text } from 'react-native';

export default class Icon extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { type, font, style } = this.props;
    return (
      <Text style={[style, { fontFamily: font }]}>
        {type}
      </Text>
    );
  }
}

Icon.propTypes = {
  type: React.PropTypes.string.isRequired,
  font: React.PropTypes.string.isRequired,
  style: React.PropTypes.any
};
