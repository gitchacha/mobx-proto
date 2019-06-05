import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class HeaderLeft extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.navigation.toggleDrawer} style={{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: 5 }}>
        <Icon
          name="menu"
          type="Entypo"
          color="white"
        />
      </TouchableOpacity>
    );
  }
}

export default HeaderLeft;
