import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')} style={styles.logo} />
      <Text style={styles.title}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});
