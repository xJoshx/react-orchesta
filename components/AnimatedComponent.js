import React from "react";
import { Animated } from "react-native";

const AnimatedComponent = ({ children, animation }) => (
  <Animated.View style={animation}>{children}</Animated.View>
);

export default AnimatedComponent;
