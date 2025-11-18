import 'react-native-reanimated';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { useColorScheme } from '../hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  // Navigation persistence state
  const [navState, setNavState] = useState(null);

  useEffect(() => {
    const init = async () => {
      // Load login state
      const token = await AsyncStorage.getItem('authToken');
      setIsLoggedIn(!!token);

      // Load navigation state
      const savedNav = await AsyncStorage.getItem('navState');
      if (savedNav) setNavState(JSON.parse(savedNav));
    };

    init();
  }, []);

  // Save navigation changes
  const handleNavStateChange = async (state: any) => {
    await AsyncStorage.setItem('navState', JSON.stringify(state));
  };

  if (!loaded || isLoggedIn === null) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto" />

        <Stack
          initialState={navState}
          onStateChange={handleNavStateChange}
          screenOptions={{
            headerShown: false,
          }}
        >
          {isLoggedIn ? (
            <>
              <Stack.Screen name="drawer" />
            </>
          ) : (
            <>
              <Stack.Screen name="login" />
              <Stack.Screen
                name="signup"
                options={{
                  animation: 'fade',
                  animationDuration: 200,
                }}
              />
            </>
          )}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
