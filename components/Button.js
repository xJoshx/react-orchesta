import React from "react";
import { Button, View } from "react-native";
import styled from "styled-components";
import { blue, white } from "../utils/colors";

const StyledButton = styled(Button)`
  font-size: 12px;
`;

const ButtonBackground = styled(View)`
  background-color: ${blue};
  border-radius: 30px;
  padding: 8px 12px;
`;

export const IOSButton = ({
  title = "Holi guacamoli",
  onPress,
  onPressOut
}) => {
  return (
    <ButtonBackground>
      <StyledButton
        onPress={onPress}
        onPressOut={onPressOut}
        title={title}
        color={white}
      />
    </ButtonBackground>
  );
};
