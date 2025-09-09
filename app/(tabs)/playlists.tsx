import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')} style={styles.logo} />
      <Text style={styles.title}>Your Playlists</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});
