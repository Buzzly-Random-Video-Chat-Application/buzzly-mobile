import '../global.css';

import { PortalProvider } from '@gorhom/portal';
import { useCustomFonts } from '@hooks/useCustomFonts';
import store from '@stores/store';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

export default function RootLayout() {
  const { fontsLoaded, fontError } = useCustomFonts();

  useEffect(() => {
    if (fontError) {
      Alert.alert('Font loading error:', fontError.message);
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <StatusBar />
            <Toast />
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
          </Provider>
        </SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
