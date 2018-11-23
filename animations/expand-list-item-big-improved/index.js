import { Animated } from "react-native";

const TENSION_IN = 12;
const FRICTION_IN = 8;

const TENSION_OUT = 10;
const FRICTION_OUT = 2;

const scaleValue = new Animated.Value(1);

export const tapButtonAnimation = { transform: [{ scale: scaleValue }] };

export const triggerShowAnimation = () => {
  scaleValue.setValue(1);

  Animated.spring(scaleValue, {
    toValue: 0.9,
    tension: TENSION_IN,
    friction: FRICTION_IN,
    useNativeDriver: true
  }).start();
};

export const triggerHideAnimation = () => {
  scaleValue.setValue(0.9);

  Animated.spring(scaleValue, {
    toValue: 1,
    tension: TENSION_OUT,
    friction: FRICTION_OUT,
    useNativeDriver: true
  }).start();
};
