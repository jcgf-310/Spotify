import { Drawer } from 'expo-router/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from 'react-native-drawer-layout';
import { View } from 'react-native';

export default function DrawerLayout() {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.9]),
      },
    ],
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name="playlists"
          options={{ title: 'Playlists' }}
        />
        <Drawer.Screen
          name="profile"
          options={{ title: 'Profile' }}
        />
        <Drawer.Screen
          name="settings"
          options={{ title: 'Settings' }}
        />
      </Drawer>
    </Animated.View>
  );
}
