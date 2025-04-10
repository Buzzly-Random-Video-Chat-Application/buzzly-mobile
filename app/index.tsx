import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export default function Welcome() {
  const { height } = Dimensions.get('window');
  const blockHeight = height / 5;
  const spacing = height / 8;

  const centerPosition = blockHeight * 2.5;

  const isMounted = useRef(true);

  const firstBuzzlyScale = useSharedValue(0.5);
  const firstBuzzlyOpacity = useSharedValue(0);

  const translateY1 = useSharedValue(blockHeight / 2);
  const translateY2 = useSharedValue(blockHeight / 2);
  const translateY3 = useSharedValue(0);
  const translateY4 = useSharedValue(blockHeight / 2);
  const translateY5 = useSharedValue(blockHeight / 2);

  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity4 = useSharedValue(0);
  const opacity5 = useSharedValue(0);

  const translateYAll = useSharedValue(0);

  useEffect(() => {
    isMounted.current = true;

    firstBuzzlyOpacity.value = withTiming(1, { duration: 400 });
    firstBuzzlyScale.value = withTiming(1, { duration: 800 }, () => {
      opacity1.value = withDelay(0, withTiming(1, { duration: 200 }));
      translateY1.value = withDelay(
        0,
        withTiming(0, { duration: 400, easing: Easing.out(Easing.exp) }),
      );

      opacity2.value = withDelay(150, withTiming(1, { duration: 200 }));
      translateY2.value = withDelay(
        150,
        withTiming(0, { duration: 400, easing: Easing.out(Easing.exp) }),
      );

      opacity4.value = withDelay(300, withTiming(1, { duration: 200 }));
      translateY4.value = withDelay(
        300,
        withTiming(0, { duration: 400, easing: Easing.out(Easing.exp) }),
      );

      opacity5.value = withDelay(450, withTiming(1, { duration: 200 }));
      translateY5.value = withDelay(
        450,
        withTiming(0, { duration: 400, easing: Easing.out(Easing.exp) }, () => {
          translateYAll.value = withTiming(-height, { duration: 800 });
        }),
      );
    });

    return () => {
      isMounted.current = false;
    };
  }, [
    firstBuzzlyScale,
    firstBuzzlyOpacity,
    opacity1,
    opacity2,
    opacity4,
    opacity5,
    translateY1,
    translateY2,
    translateY4,
    translateY5,
    translateYAll,
    height,
  ]);

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      opacity: opacity1.value,
      transform: [{ translateY: translateY1.value + translateYAll.value }],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity2.value,
      transform: [{ translateY: translateY2.value + translateYAll.value }],
    };
  });

  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      opacity: firstBuzzlyOpacity.value,
      transform: [
        { scale: firstBuzzlyScale.value },
        { translateY: translateY3.value + translateYAll.value },
      ],
    };
  });

  const animatedStyle4 = useAnimatedStyle(() => {
    return {
      opacity: opacity4.value,
      transform: [{ translateY: translateY4.value + translateYAll.value }],
    };
  });

  const animatedStyle5 = useAnimatedStyle(() => {
    return {
      opacity: opacity5.value,
      transform: [{ translateY: translateY5.value + translateYAll.value }],
    };
  });

  useEffect(() => {
    setTimeout(() => {
      router.push('/splash-screen');
    }, 2500);
  }, []);

  return (
    <View className="flex-1 items-center bg-dark-500">
      <Animated.View
        style={[
          animatedStyle1,
          {
            position: 'absolute',
            top: centerPosition - spacing * 2,
          },
        ]}
      >
        <Text className="font-sans-bold text-5xl text-primary-500">BUZZLY</Text>
      </Animated.View>

      {/* Chữ BUZZLY thứ 2 */}
      <Animated.View
        style={[
          animatedStyle2,
          {
            position: 'absolute',
            top: centerPosition - spacing,
          },
        ]}
      >
        <Text className="font-sans-bold text-5xl text-primary-500">BUZZLY</Text>
      </Animated.View>

      <Animated.View
        style={[
          animatedStyle3,
          {
            position: 'absolute',
            top: centerPosition,
          },
        ]}
      >
        <Text className="font-sans-bold text-5xl text-primary-500">BUZZLY</Text>
      </Animated.View>

      <Animated.View
        style={[
          animatedStyle4,
          {
            position: 'absolute',
            top: centerPosition + spacing,
          },
        ]}
      >
        <Text className="font-sans-bold text-5xl text-primary-500">BUZZLY</Text>
      </Animated.View>

      <Animated.View
        style={[
          animatedStyle5,
          {
            position: 'absolute',
            top: centerPosition + spacing * 2,
          },
        ]}
      >
        <Text className="font-sans-bold text-5xl text-primary-500">BUZZLY</Text>
      </Animated.View>
    </View>
  );
}
