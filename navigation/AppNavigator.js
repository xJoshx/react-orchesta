import { createStackNavigator, createAppContainer } from "react-navigation";
import App from "../screens/Main";
import SlideNotification from "../screens/SlideNotification";
import TapButton from "../screens/TapButton";
import SlideUpCard from "../screens/SlideUpCard";
import ExpandListItem from "../screens/ExpandListItem";

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
  },
  SlideUpCard: {
    screen: SlideUpCard,
    path: "animations/slide-up-card",
    navigationOptions: ({ navigation }) => ({
      title: "Slide up card"
    })
  },
  ExpandListItem: {
    screen: ExpandListItem,
    path: "animations/expand-list-item",
    navigationOptions: ({ navigation }) => ({
      title: "Expand list item"
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
