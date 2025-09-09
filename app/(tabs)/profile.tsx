// (tabs)/ProfileScreen.tsx
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.followers}>0 followers • 0 following</Text>
          
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        {/* Recently Played */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently played</Text>
          <TouchableOpacity style={styles.recentItem}>
            <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.recentImage} />
            <View style={styles.recentInfo}>
              <Text style={styles.recentTitle}>Blinding Lights</Text>
              <Text style={styles.recentSubtitle}>The Weeknd</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={20} color="#b3b3b3" />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recentItem}>
            <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.recentImage} />
            <View style={styles.recentInfo}>
              <Text style={styles.recentTitle}>Good 4 U</Text>
              <Text style={styles.recentSubtitle}>Olivia Rodrigo</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={20} color="#b3b3b3" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Made for you */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Made for you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.madeForYouItem}>
              <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.madeForYouImage} />
              <Text style={styles.madeForYouTitle}>Discover Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.madeForYouItem}>
              <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.madeForYouImage} />
              <Text style={styles.madeForYouTitle}>Daily Mix 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.madeForYouItem}>
              <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.madeForYouImage} />
              <Text style={styles.madeForYouTitle}>Release Radar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Your Artists */}
        <View style={[styles.section, { marginBottom: 100 }]}>
          <Text style={styles.sectionTitle}>Your artists</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.artistItem}>
              <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.artistImage} />
              <Text style={styles.artistName}>The Weeknd</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.artistItem}>
              <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.artistImage} />
              <Text style={styles.artistName}>Dua Lipa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.artistItem}>
              <Image source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")} style={styles.artistImage} />
              <Text style={styles.artistName}>Post Malone</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  settingsButton: {
    padding: 4,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#333",
    marginBottom: 16,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  followers: {
    color: "#b3b3b3",
    fontSize: 14,
    marginBottom: 24,
  },
  editButton: {
    borderWidth: 1,
    borderColor: "#b3b3b3",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  recentImage: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#333",
  },
  recentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  recentTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  recentSubtitle: {
    color: "#b3b3b3",
    fontSize: 14,
    marginTop: 2,
  },
  madeForYouItem: {
    width: 140,
    marginRight: 16,
  },
  madeForYouImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
    backgroundColor: "#333",
  },
  madeForYouTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  artistItem: {
    alignItems: "center",
    width: 120,
    marginRight: 16,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#333",
  },
  artistName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center",
  },
});