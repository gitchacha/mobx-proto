import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyledTextInput } from '../components/StyledTextInput';
import HeaderTitle from '../components/HeaderTitle';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import Colors from '../constants/Colors';
import { inject, observer } from 'mobx-react';

@inject('counterStore', 'counterLevelStore')
@observer
class CountLevel2View extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>React Native & MobX Example</Text>
        <View style={s.container}>
          <Text style={{ fontSize: 20 }}>{this.props.counterStore.number}</Text>
          <TouchableOpacity style={s.upButton} onPress={() => this.props.counterLevelStore.increase(3)}>
            <Text style={{ fontSize: 20 }}>+3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.upButton} onPress={() => this.props.counterLevelStore.increase(6)}>
            <Text style={{ fontSize: 20 }}>+6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.downButton} onPress={() => this.props.counterLevelStore.decrease(3)}>
            <Text style={{ fontSize: 20 }}>-3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.downButton} onPress={() => this.props.counterLevelStore.decrease(6)}>
            <Text style={{ fontSize: 20 }}>-6</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const CountLevel2 = createStackNavigator({
  Home: {
    screen: CountLevel2View,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.header.backgroundColor,
        elevation: 0,
      },
      headerTitle: <HeaderTitle title="CountLevel2" />,
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerRight: <HeaderRight />,
    }),
  },
});

const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  upButton: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 20
  },
  downButton: {
    marginLeft: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20
  }
});

export default CountLevel2;
