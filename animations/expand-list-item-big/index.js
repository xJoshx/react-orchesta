import { Animated } from "react-native";

const TENSION = 20;
const FRICTION = 12;

const TENSION_BORDER_RADIUS = 2;
const FRICTION_BORDER_RADIUS = 20;

const scaleValue = new Animated.Value(0);
const translateYValue = new Animated.Value(0);
const borderRadiusValue = new Animated.Value(16);

const listItemBigScale = scaleValue.interpolate({
  inputRange: [0, 0.25, 0.5, 1],
  outputRange: [1, 0.85, 0.9, 1.05]
});

export const tapButtonAnimation = {
  transform: [{ scale: listItemBigScale }, { translateY: translateYValue }]
};

export const roundBordersAnimation = { borderRadius: borderRadiusValue };

export const triggerShowAnimation = () => {
  scaleValue.setValue(0);
  translateYValue.setValue(0);
  borderRadiusValue.setValue(16);

  Animated.parallel([
    Animated.spring(scaleValue, {
      toValue: 1,
      tension: TENSION,
      friction: FRICTION,
      useNativeDriver: true
    }).start(),
    Animated.spring(translateYValue, {
      toValue: -10,
      tension: TENSION,
      friction: FRICTION,
      useNativeDriver: true
    }).start(),
    Animated.spring(borderRadiusValue, {
      toValue: 0,
      tension: TENSION_BORDER_RADIUS,
      friction: FRICTION_BORDER_RADIUS,
      useNativeDriver: true
    }).start()
  ]);
};

export const triggerHideAnimation = () => {
  scaleValue.setValue(1);
  translateYValue.setValue(-10);
  borderRadiusValue.setValue(0);

  Animated.parallel(
    Animated.spring(scaleValue, {
      toValue: 0,
      tension: TENSION,
      friction: FRICTION,
      useNativeDriver: true
    }).start(),
    Animated.spring(translateYValue, {
      toValue: 0,
      tension: TENSION,
      friction: FRICTION,
      useNativeDriver: true
    }).start(),
    Animated.spring(borderRadiusValue, {
      toValue: 16,
      tension: TENSION_BORDER_RADIUS,
      friction: FRICTION_BORDER_RADIUS,
      useNativeDriver: true
    }).start()
  );
};
