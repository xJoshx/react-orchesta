import { Animated } from "react-native";

const TENSION = 20;
const FRICTION = 12;

const scaleValue = new Animated.Value(0);
const radiusValue = new Animated.Value(0);

const listItemBigScale = scaleValue.interpolate({
  inputRange: [0, 0.25, 0.5, 1],
  outputRange: [1, 0.75, 0.85, 1.05]
});
// const borderRadius = radiusValue.interpolate({
//   inputRange: [0, 0.25, 0.5, 1],
//   outputRange: [1, 0.75, 0.85, 1.05]
// })

export const tapButtonAnimation = {
  transform: [{ scale: listItemBigScale }],
  borderRadius: radiusValue
};

export const triggerShowAnimation = () => {
  scaleValue.setValue(0);
  radiusValue.setValue(16);

  Animated.spring(scaleValue, {
    toValue: 1,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();

  Animated.spring(radiusValue, {
    toValue: 0,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();
};

export const triggerHideAnimation = () => {
  scaleValue.setValue(1);
  radiusValue.setValue(0);

  Animated.spring(scaleValue, {
    toValue: 0,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();

  Animated.spring(radiusValue, {
    toValue: 16,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();
};
