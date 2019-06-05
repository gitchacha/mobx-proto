import React from 'react';
import { TextInput } from 'react-native';

export class StyledTextInput extends React.Component {
  render() {
    return <TextInput {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
