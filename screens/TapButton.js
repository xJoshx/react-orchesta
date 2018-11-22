import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components";

import { IOSButton } from "../components/Button";
import AnimatedComponent from "../components/AnimatedComponent";
import {
  tapButtonAnimation,
  triggerTapButtonAnimation
} from "../animations/tap-button";

const AppContainer = styled(View)`
  display: flex;
  flex: 1;
  justify-content: ${props => (props.center ? "center" : "flex-start")};
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
  state = {};

  render() {
    return (
      <Content center>
        <TouchableWithoutFeedback>
          <AnimatedComponent animation={tapButtonAnimation}>
            <IOSButton onPress={triggerTapButtonAnimation} />
          </AnimatedComponent>
        </TouchableWithoutFeedback>
      </Content>
    );
  }
}

export default App;
