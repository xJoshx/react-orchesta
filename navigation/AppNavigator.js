import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import App from "../screens/Main";
import SlideNotification from "../screens/SlideNotification";
import TapButton from "../screens/TapButton";

const AppNavigator = createStackNavigator({
  Main: {
    screen: App,
    path: "animations/",
    navigationOptions: ({ navigation }) => ({
      title: "Animations list"
    })
  },
  SlideNotification: {
    screen: SlideNotification,
    path: "animations/slide-notification",
    navigationOptions: ({ navigation }) => ({
      title: "Slide notification"
    })
  },
  TapButton: {
    screen: TapButton,
    path: "animations/tap-button",
    navigationOptions: ({ navigation }) => ({
      // title: `${navigation.state.params.title}`
      title: "Tap button"
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
