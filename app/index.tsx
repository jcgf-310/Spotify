// app/index.tsx
import { useEffect } from 'react';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  useEffect(() => {
    // Redirect to Login screen immediately when app starts
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 100); // Small delay to ensure navigation is ready

    return () => clearTimeout(timer);
  }, []);

  // Return empty view while redirecting
  return <View style={{ flex: 1, backgroundColor: '#121212' }} />;
}