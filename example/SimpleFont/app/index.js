import React, { Component, View } from 'react-native';
import PureIcon from 'react-native-pure-icon';

import fontTypes from './font_types';

const { Icon, glypyMapMaker } = PureIcon;

const glypy = glypyMapMaker(fontTypes);

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon type={glypy.HOME} font={'icomoon'} style={{ fontSize: 24, margin: 5 }}/>
        <Icon type={glypy.PAINT} font={'icomoon'} style={{ fontSize: 24, margin: 5 }}/>
        <Icon type={glypy.CLUBS} font={'icomoon'} style={{ fontSize: 24, margin: 5 }}/>
        <Icon type={glypy.FILE} font={'icomoon'} style={{ fontSize: 24, margin: 5 }}/>
      </View>
    );
  }
}
