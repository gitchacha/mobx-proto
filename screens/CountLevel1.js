import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyledTextInput } from '../components/StyledTextInput';
import HeaderTitle from '../components/HeaderTitle';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import Colors from '../constants/Colors';
import { inject, observer } from 'mobx-react';

@inject('counterStore')
@observer
class CountLevel1View extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>React Native & MobX Example</Text>
        <View style={s.container}>
          <Text style={{ fontSize: 20 }}>{this.props.counterStore.number}</Text>
          <TouchableOpacity style={s.upButton} onPress={() => this.props.counterStore.increase(1)}>
            <Text style={{ fontSize: 20 }}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.upButton} onPress={() => this.props.counterStore.increase(2)}>
            <Text style={{ fontSize: 20 }}>+2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.downButton} onPress={() => this.props.counterStore.decrease(1)}>
            <Text style={{ fontSize: 20 }}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.downButton} onPress={() => this.props.counterStore.decrease(2)}>
            <Text style={{ fontSize: 20 }}>-2</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const CountLevel1 = createStackNavigator({
  Home: {
    screen: CountLevel1View,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.header.backgroundColor,
        elevation: 0,
      },
      headerTitle: <HeaderTitle title="CountLevel1" />,
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

export default CountLevel1;
