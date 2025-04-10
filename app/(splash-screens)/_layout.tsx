import { Stack } from 'expo-router';

export default function SplashScreensLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="splash-screen"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
