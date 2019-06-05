import React, {Component} from 'react';
import { View, Text } from 'react-native';

class HeaderTitle extends Component {
  render() {
    return (
      <View style={{ flex : 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{this.props.title}</Text>
      </View>
    );
  }
}

export default HeaderTitle;
