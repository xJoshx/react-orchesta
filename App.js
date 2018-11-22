import React from "react";
import { View, Animated, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components";

import { IOSButton } from "./components/Button";
import { animationStyle, animation } from "./animations/tap-button";

const TOGGLED = "TOGGLED";
const HIDDEN = "HIDDEN";

const AppContainer = styled(View)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding: 20px 10px;
  background: white;
  overflow: hidden;
`;

function Content({ children, center = false }) {
  return <AppContainer>{children}</AppContainer>;
}

class App extends React.Component {
  state = {
    status: TOGGLED
  };

  render() {
    return (
      <Content center>
        <TouchableWithoutFeedback>
          <Animated.View style={animationStyle}>
            <IOSButton onPress={animation} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </Content>
    );
  }
}

export default App;
