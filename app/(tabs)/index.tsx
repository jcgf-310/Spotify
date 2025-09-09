// (tabs)/index.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

interface PlaylistItem {
  id: string;
  title: string;
  artist: string;
  image: any;
}

const recentPlaylists: PlaylistItem[] = [
  { id: '1', title: 'Liked Songs', artist: 'Your favorite songs', image: require('@/assets/images/SPOTIFY/SpotifyLogo.png') },
  { id: '2', title: 'Discover Weekly', artist: 'Your weekly mixtape', image: require('@/assets/images/SPOTIFY/SpotifyLogo.png') },
  { id: '3', title: 'Daily Mix 1', artist: 'Pop, Hip-Hop, and more', image: require('@/assets/images/SPOTIFY/SpotifyLogo.png') },
  { id: '4', title: 'Release Radar', artist: 'New releases for you', image: require('@/assets/images/SPOTIFY/SpotifyLogo.png') },
];

const madeForYou: PlaylistItem[] = [
  { id: '5', title: 'Daily Mix 2', artist: 'Rock, Alternative, and more', image: require('@/assets/images/SPOTIFY/SpotifyLogo.png') },
  { id: '6', title: 'Daily Mix 3', artist: 'Indie, Folk, and more', image: require('@/assets/images/SPOTIFY/SpotifyLogo.png') },
  { id: '7', title: 'Chill Mix', artist: 'Relax and unwind', image: require('@/assets/images/SPOTIFY/SpotifyLogo.png') },
];

export default function HomeScreen() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const renderPlaylistItem = ({ item }: { item: PlaylistItem }) => (
    <TouchableOpacity style={styles.playlistCard}>
      <Image source={item.image} style={styles.playlistImage} />
      <View style={styles.playlistInfo}>
        <Text style={styles.playlistTitle}>{item.title}</Text>
        <Text style={styles.playlistArtist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.greeting}>{getGreeting()}</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="time-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Quick Access Grid */}
        <View style={styles.quickAccessGrid}>
          <TouchableOpacity style={styles.quickAccessItem}>
            <View style={styles.likedSongsGradient}>
              <Ionicons name="heart" size={20} color="#fff" />
            </View>
            <Text style={styles.quickAccessText}>Liked Songs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessItem}>
            <Image source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')} style={styles.quickAccessImage} />
            <Text style={styles.quickAccessText}>Discover Weekly</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessItem}>
            <Image source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')} style={styles.quickAccessImage} />
            <Text style={styles.quickAccessText}>Daily Mix 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessItem}>
            <Image source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')} style={styles.quickAccessImage} />
            <Text style={styles.quickAccessText}>Release Radar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessItem}>
            <Image source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')} style={styles.quickAccessImage} />
            <Text style={styles.quickAccessText}>Daily Mix 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessItem}>
            <Image source={require('@/assets/images/SPOTIFY/SpotifyLogo.png')} style={styles.quickAccessImage} />
                        <Text style={styles.quickAccessText}>Daily Mix 3</Text>
                      </TouchableOpacity>
                    </View>

                    {/* Recent Playlists */}
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Recently Played</Text>
                      <FlatList
                        data={recentPlaylists}
                        renderItem={renderPlaylistItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 5 }}
                      />
                    </View>

                    {/* Made For You */}
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Made For You</Text>
                      <FlatList
                        data={madeForYou}
                        renderItem={renderPlaylistItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 5 }}
                      />
                    </View>

                  </ScrollView>
                </SafeAreaView>
              );
            }

            const styles = StyleSheet.create({
              container: { flex: 1, backgroundColor: '#121212' },
              header: {
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingVertical: 10,
                justifyContent: 'space-between',
              },
              profileButton: { marginRight: 10 },
              profileImage: { width: 40, height: 40, borderRadius: 20 },
              greeting: { flex: 1, color: '#fff', fontSize: 18, fontWeight: '600' },
              headerIcons: { flexDirection: 'row' },
              iconButton: { marginLeft: 15 },

              quickAccessGrid: {
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginVertical: 10,
              },
              quickAccessItem: {
                width: '30%',
                marginBottom: 15,
                alignItems: 'center',
              },
              likedSongsGradient: {
                width: 60,
                height: 60,
                borderRadius: 8,
                backgroundColor: '#1DB954',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5,
              },
              quickAccessImage: { width: 60, height: 60, borderRadius: 8, marginBottom: 5 },
              quickAccessText: { color: '#fff', fontSize: 12, textAlign: 'center' },

              section: { marginTop: 20 },
              sectionTitle: { color: '#fff', fontSize: 16, fontWeight: '700', marginLeft: 10, marginBottom: 10 },

              playlistCard: {
                width: 140,
                marginRight: 15,
              },
              playlistImage: {
                width: '100%',
                height: 140,
                borderRadius: 8,
              },
              playlistInfo: {
                marginTop: 5,
              },
              playlistTitle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: '600',
              },
              playlistArtist: {
                color: '#aaa',
                fontSize: 12,
                marginTop: 2,
              },
            });
