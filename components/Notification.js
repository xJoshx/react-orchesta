import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components";
import { mockText } from "../mock";

const Notification = styled(View)`
  padding: 12px 8px;
  border-radius: 12px;
  min-height: 80px;
  max-height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
`;

const notificationShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5
};

const Title = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Body = styled(Text)`
  font-size: 11px;
  font-weight: 300;
  overflow: hidden;
  line-height: 13.75px;
`;

export const IOSNotification = ({
  title = "Holi",
  body = mockText,
  onPress,
  onPressOut
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} onPressOut={onPressOut}>
      <Notification style={notificationShadow}>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Notification>
    </TouchableWithoutFeedback>
  );
};
