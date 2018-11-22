import { Animated } from "react-native";

const scaleValue = new Animated.Value(0);
const buttonScale = scaleValue.interpolate({
  inputRange: [0, 0.25, 0.5, 1],
  outputRange: [1, 0.5, 0.75, 1]
});

export const animationStyle = {
  transform: [{ scale: buttonScale }]
};
export const animation = () => {
  scaleValue.setValue(0.5);
  Animated.spring(scaleValue, {
    toValue: 1,
    tension: 150,
    friction: 6,
    useNativeDriver: true
  }).start();
};
