import { PortalProvider } from '@gorhom/portal';
import { useCustomFonts } from '@hooks/useCustomFonts';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  const { fontsLoaded, fontError } = useCustomFonts();

  useEffect(() => {
    if (fontError) {
      console.error('Font loading error:', fontError);
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PortalProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar />
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
        </GestureHandlerRootView>
      </PortalProvider>
    </SafeAreaProvider>
  );
}
