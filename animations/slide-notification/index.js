import { Animated } from "react-native";

const TENSION = 120;
const FRICTION = 60;

const slideValue = new Animated.Value(0);
const notificationPosition = slideValue.interpolate({
  inputRange: [0, 0.25, 0.5, 1],
  outputRange: [-100, -50, 0, 50]
});

export const slideNotificationAnimation = {
  transform: [{ translateY: notificationPosition }]
};

export const triggerShowAnimation = () => {
  slideValue.setValue(0);
  Animated.spring(slideValue, {
    toValue: 1,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();
};

export const triggerHideAnimation = () => {
  slideValue.setValue(1);
  Animated.spring(slideValue, {
    toValue: 0,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();
};
