import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground
} from "react-native";
import styled from "styled-components";
import { mockText } from "../mock";
import { iOSUIKit } from "react-native-typography";
const { height } = Dimensions.get("window");

const ListItemBig = styled(ImageBackground)`
  padding: 20px 12px;
  height: ${height * 0.5}px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  justify-content: space-between;
  overflow: hidden;
  color: #fff;
`;

const listItemBigShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5
};

const ListItemBigWrapper = styled(View)`
  border-radius: 16px;
  overflow: hidden;
`;
const TitleWrapper = styled(View)``;
const Title = styled(Text)``;
const Subtitle = styled(Text)``;
const Footnote = styled(Text)``;

export const IOSListItemBigImproved = ({
  title = "Holi",
  body = mockText,
  footnote = "This is the footnote",
  subtitle = "Subtitle here",
  onPressIn,
  onPressOut
}) => {
  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <ListItemBigWrapper style={listItemBigShadow}>
        <ListItemBig source={require("../assets/listItemBackground2.jpg")}>
          <TitleWrapper>
            <Subtitle
              style={{
                ...iOSUIKit.subheadEmphasizedWhiteObject,
                textTransform: "uppercase"
              }}
            >
              {subtitle}
            </Subtitle>
            <Title style={iOSUIKit.largeTitleEmphasizedWhite}>{title}</Title>
          </TitleWrapper>
          <Footnote style={iOSUIKit.calloutWhite}>{footnote}</Footnote>
        </ListItemBig>
      </ListItemBigWrapper>
    </TouchableWithoutFeedback>
  );
};
