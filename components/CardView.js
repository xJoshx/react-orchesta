import React from "react";
import { View, Text, TouchableWithoutFeedback, Dimensions } from "react-native";
import styled from "styled-components";
import { mockText } from "../mock";
import { iOSUIKit } from "react-native-typography";
import { white } from "../utils/colors";
const { height } = Dimensions.get("window");

const CardView = styled(View)`
  padding: 20px;
  margin-top: ${height * 0.15}px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${white};
  height: ${height * 0.8}px;
`;

const notificationShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 1
};

const Title = styled(Text)``;

const Body = styled(Text)`
  font-size: 11px;
  font-weight: 300;
  overflow: hidden;
  line-height: 13.75px;
`;

export const IOSCardView = ({
  title = "Holi",
  body = mockText,
  onPress,
  onPressOut
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} onPressOut={onPressOut}>
      <CardView style={notificationShadow}>
        <Title style={iOSUIKit.largeTitleEmphasized}>{title}</Title>
        <Body style={iOSUIKit.body}>{body}</Body>
      </CardView>
    </TouchableWithoutFeedback>
  );
};
