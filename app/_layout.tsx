import { useCustomFonts } from '@hooks/useCustomFonts';
import { SplashScreen, Stack } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { useEffect } from 'react';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  const { fontsLoaded, fontError } = useCustomFonts();

  useEffect(() => {
    if (fontError) throw fontError;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(splash-screens)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="others"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
