import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import { IOSListItemBigImproved } from "../components/ListItemImproved";
import AnimatedComponent from "../components/AnimatedComponent";
import {
  tapButtonAnimation,
  triggerShowAnimation,
  triggerHideAnimation
} from "../animations/expand-list-item-big-improved";

const TOGGLED = "TOGGLED";
const HIDDEN = "HIDDEN";

const AppContainer = styled(View)`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 20px 10px;
  background: white;
  overflow: hidden;
`;

function Content({ children, center = false }) {
  return <AppContainer center={center}>{children}</AppContainer>;
}

const WrapperIOSButton = styled(View)`
  position: absolute;
  top: 25px;
  right: 50px;
  left: 50px;
`;

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
        <AnimatedComponent animation={tapButtonAnimation}>
          <IOSListItemBigImproved
            onPressIn={this.showAnimation}
            onPressOut={this.hideAnimation}
          />
        </AnimatedComponent>
      </Content>
    );
  }
}

export default App;
