import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { mockText } from "../mock";

const Notification = styled(TouchableOpacity)`
  padding: 12px 8px;
  border-radius: 12px;
  min-height: 80px;
  max-height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fafafa;
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
    <Notification
      activeOpacity={1}
      onPress={onPress}
      onPressOut={onPressOut}
      style={notificationShadow}
    >
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Notification>
  );
};
