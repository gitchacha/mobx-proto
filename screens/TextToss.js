import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StyledTextInput } from '../components/StyledTextInput';
import HeaderTitle from '../components/HeaderTitle';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import Colors from '../constants/Colors';
import { inject, observer } from 'mobx-react';
import { autorun, reaction, when, intercept } from 'mobx';

@inject('textStore', 'visibleStore')
@observer
class TextTossView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textStore : this.props.textStore.text
    };

    this.isVisible = true;

    console.info('this.props.textStore.text :: ', this.props.textStore.text);

    // mobx autorun
    autorun(() => {
      console.info('autorun :: ', this.props.textStore.text);
    });

    // mobx reaction
    reaction(
      () => this.props.visibleStore.isVisible,
      (isVisible) => {
        console.info('reaction :: ', isVisible);
      }
    );

    // mobx when
    when(
      () => !this.props.visibleStore.isVisible,
      () => {
        console.info('when :: ', this.props.visibleStore.isVisible);
      }
    );

    // mobx intercept
    intercept(
      this.props.visibleStore, "isVisible", change => {
        console.info("intercept :: ", change);
        return change;
      }
    );
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 30, }}>
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={{ flex: 1, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ textAlign: "left", width: "100%" }}>입력</Text>
            <StyledTextInput
              style={{ borderWidth: 2, width: "100%", paddingHorizontal: 15 }}
              value={this.state.textStore}
              onChangeText={(text) => this.setState({textStore : text})}
            />
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "center", alignItems: "center" }}>
              <View style={{ marginHorizontal: 10 }}>
                <Button
                  title="텍스트를 스토어로 전달"
                  onPress={() => {
                    console.info('test');
                    this.props.textStore.setText(this.state.textStore);
                  }}
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Button
                  title="스토어 텍스트 가져오기"
                  onPress={() => {
                    console.info('test');
                    this.setState({textStore : this.props.textStore.text});
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ textAlign: "left", width: "100%" }}>스토어 텍스트</Text>
            <Text style={{ borderWidth: 2, width: "100%", fontSize: 20, height: "50%", paddingHorizontal: 15 }}>{this.props.textStore.text}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30 }}>render() 밖에서 Store 값 핸들링</Text>
            <Text style={{ fontSize: 20 }}>Visible Store 값에 따라 표시됨</Text>
            <Text style={{ fontSize: 20 }}>무조건 표시</Text>
          </View>
        </View>
      </View>
    );
  }
}

const TextToss = createStackNavigator({
  Home: {
    screen: TextTossView,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.header.backgroundColor,
        elevation: 0,
      },
      headerTitle: <HeaderTitle title="TextToss" />,
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerRight: <HeaderRight />,
    }),
  },
});

export default TextToss;
