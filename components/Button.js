import React from "react";
import { Text, TouchableOpacity as ButtonWrapper } from "react-native";
import styled from "styled-components";
import { blue, white } from "../utils/colors";
import { iOSUIKit } from "react-native-typography";

const fontProperties = iOSUIKit.calloutObject;
const fontSize = fontProperties.fontSize;
const borderRadius = fontSize * 1.875;
const paddingTopAndBottom = fontSize * 0.75;
const paddingLeftAndRight = fontSize * 1.25;

const StyledButton = styled(ButtonWrapper)`
  background-color: ${blue};
  border-radius: ${borderRadius}px;
  padding: ${paddingTopAndBottom}px ${paddingLeftAndRight}px;
`;

const StyledText = styled(Text)`
  text-align: center;
`;

export const IOSButton = ({
  title = "Holi guacamoli",
  onPress,
  onPressOut
}) => {
  return (
    <StyledButton
      onPress={onPress}
      onPressOut={onPressOut}
      title={title}
      activeOpacity={0.85}
    >
      <StyledText style={{ ...fontProperties, color: white }}>
        {title}
      </StyledText>
    </StyledButton>
  );
};
