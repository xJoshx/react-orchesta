import { Animated } from "react-native";

const TENSION = 150;
const FRICTION = 6;

const scaleValue = new Animated.Value(0);
const buttonScale = scaleValue.interpolate({
  inputRange: [0, 0.25, 0.5, 1],
  outputRange: [1, 0.5, 0.75, 1]
});

export const tapButtonAnimation = {
  transform: [{ scale: buttonScale }]
};
export const triggerTapButtonAnimation = () => {
  scaleValue.setValue(0.5);
  Animated.spring(scaleValue, {
    toValue: 1,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();
};
