import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import { IOSCardView } from "../components/CardView";
import AnimatedComponent from "../components/AnimatedComponent";
import {
  slideCardViewAnimation,
  triggerShowAnimation,
  triggerHideAnimation
} from "../animations/slide-card-view";
import { IOSButton } from "../components/Button";

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
    status: TOGGLED
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
        <AnimatedComponent animation={slideCardViewAnimation}>
          <IOSCardView />
        </AnimatedComponent>
        <WrapperIOSButton>
          <IOSButton
            title="Toggle card view"
            onPress={
              this.state.status === HIDDEN
                ? this.showAnimation
                : this.hideAnimation
            }
          />
        </WrapperIOSButton>
      </Content>
    );
  }
}

export default App;
