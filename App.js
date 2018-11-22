import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components";

import { IOSNotification } from "./components/Notification";
import AnimatedComponent from "./components/AnimatedComponent";
import {
  slideNotificationAnimation,
  triggerShowAnimation,
  triggerHideAnimation
} from "./animations/slide-notification";
import { IOSButton } from "./components/Button";

const TOGGLED = "TOGGLED";
const HIDDEN = "HIDDEN";

const AppContainer = styled(View)`
  display: flex;
  flex: 1;
  /* justify-content: ${props => (props.center ? "center" : "flex-start")}; */
  justify-content: space-around;
  align-items: ${props => (props.center ? "center" : "flex-start")};
  padding: 30px;
  padding: 20px 10px;
  background: white;
  overflow: hidden;
`;

function Content({ children, center = false }) {
  return <AppContainer center={center}>{children}</AppContainer>;
}

class App extends React.Component {
  state = {
    status: HIDDEN
  };

  showAnimation = () => {
    this.setState({ status: TOGGLED }, triggerShowAnimation);
  };

  hideAnimation = () => {
    this.setState({ status: HIDDEN }, triggerHideAnimation);
  };

  render() {
    return (
      <Content center>
        <AnimatedComponent animation={slideNotificationAnimation}>
          <IOSNotification />
        </AnimatedComponent>
        <IOSButton
          title="Toggle notification"
          onPress={
            this.state.status === HIDDEN
              ? this.showAnimation
              : this.hideAnimation
          }
        />
      </Content>
    );
  }
}

export default App;
