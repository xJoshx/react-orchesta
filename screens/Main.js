import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import styled from "styled-components";
import { white } from "../utils/colors";

const AppContainer = styled(View)`
  display: flex;
  flex: 1;
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
    activeItem: null,
    // activeItem: { key: "Slide up card view", path: "SlideUpCard" },
    data: [
      { key: "Slide notification", path: "SlideNotification" },
      { key: "Tap button", path: "TapButton" },
      { key: "Slide up card view", path: "SlideUpCard" }
    ]
  };

  render() {
    return (
      <Content center>
        {this.state.activeItem ? (
          this.props.navigation.push(this.state.activeItem.path)
        ) : (
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor={white}
                onPress={() => this.props.navigation.push(item.path)}
              >
                <Text style={styles.item}>{item.key}</Text>
              </TouchableHighlight>
            )}
          />
        )}
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default App;
