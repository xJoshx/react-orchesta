import { Animated, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

const TENSION = 18;
const FRICTION = 6;
const CARD_HEIGHT = height * 0.8;

const cardViewValue = new Animated.Value(0);
// const cardViewPosition = cardViewValue.interpolate({
//   inputRange: [0, 0.25, 0.5, 0.75, 1],
//   outputRange: [
//     CARD_HEIGHT,
//     CARD_HEIGHT * 0.75,
//     CARD_HEIGHT * 0.5,
//     CARD_HEIGHT * 0.25,
//     0
//   ]
// });

export const slideCardViewAnimation = {
  transform: [{ translateY: cardViewValue }]
};

export const triggerShowAnimation = () => {
  cardViewValue.setValue(CARD_HEIGHT);
  Animated.spring(cardViewValue, {
    toValue: 0,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();
};

export const triggerHideAnimation = () => {
  cardViewValue.setValue(0);
  Animated.spring(cardViewValue, {
    toValue: CARD_HEIGHT,
    tension: TENSION,
    friction: FRICTION,
    useNativeDriver: true
  }).start();
};
