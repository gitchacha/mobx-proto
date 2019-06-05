import React from 'react';
import { View, Image, TextInput, Text, Button, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import { createAppContainer, createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation';
import Layout from '../constants/Layout';
import TextToss from '../screens/TextToss';
import CountLevel1 from '../screens/CountLevel1';
import CountLevel2 from '../screens/CountLevel2';
import { Icon, ButtonGroup } from 'react-native-elements';
import { observer, inject } from 'mobx-react'; 

const drawerWidth = Math.min(Layout.window.width * 0.8, 300);
const paddingTop = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;

@inject('visibleStore')
@observer
class CustomDrawerContentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#43484d' }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}
          style={{ position: "absolute", right: 5, top: paddingTop + 5 }}>
          <Icon
            name="close"
            type="FontAwesome"
            color="white"
          />
        </TouchableOpacity>
        <View style={{ marginTop: paddingTop + 20, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{ maxWidth: drawerWidth * 0.9 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ margin: 20 }}>
          <DrawerItems {...this.props} />
        </View>
        <View style={{ marginTop: "auto", marginHorizontal: 20, marginBottom: 40}}>
          <Text style={{ color: "white" }}>VisibleStore 값 전달</Text>
          <ButtonGroup
            onPress={(index) => this.props.visibleStore.setVisible(index == 0) }
            selectedIndex={this.props.visibleStore.isVisible ? 0 : 1}
            buttons={['Visible', 'Hide']}
          />
        </View>
      </View>
    
    );
  }
}

const appNavigator = createAppContainer(createDrawerNavigator(
  {
    TextTosss: {
      screen: TextToss,
    },
    CountLevel1: {
      screen: CountLevel1,
    },
    CountLevel2: {
      screen: CountLevel2,
    },
  },
  {
    initialRouteName: 'TextTosss',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    useNativeAnimations: false,
    drawerWidth: drawerWidth,
    contentComponent: CustomDrawerContentComponent,
  }
));

export default appNavigator;
