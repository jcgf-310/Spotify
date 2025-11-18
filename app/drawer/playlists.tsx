import React from "react";
import { router } from "expo-router";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const playlists = [
  {
    id: "1",
    title: "Lezgaur",
    image: require("@/assets/a/p1.png"),
  },
  {
    id: "2",
    title: "Red",
    image: require("@/assets/a/p2.png"),
  },
  {
    id: "3",
    title: "DQ",
    image: require("@/assets/a/p3.png"),
  },
  {
    id: "4",
    title: "crazy",
    image: require("@/assets/a/p4.png"),
  },
];

export default function PlaylistsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="musical-notes" size={28} color="#1DB954" />
        <Text style={styles.headerText}>Playlists</Text>
      </View>

      {/* Playlist List */}
            <FlatList
              data={playlists}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.playlistItem}>
                  <Image source={item.image} style={styles.coverImage} />
                  <Text style={styles.playlistTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  playlistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  coverImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  playlistTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});