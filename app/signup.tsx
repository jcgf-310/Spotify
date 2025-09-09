import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState({ day: "", month: "", year: "" });
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (!email.trim() || !displayName.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Logo + Header */}
        <View style={styles.logoTextContainer}>
          <Image
            source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Spotify</Text>
        </View>

        {/* Email */}
        <LinearGradient
          colors={['#282828', '#3a3a3a', '#282828']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.inputGradientContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#bbb"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </LinearGradient>

        {/* Full Name */}
        <LinearGradient
          colors={['#282828', '#3a3a3a', '#282828']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.inputGradientContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#bbb"
            value={displayName}
            onChangeText={setDisplayName}
          />
        </LinearGradient>

        {/* Password */}
        <LinearGradient
          colors={['#282828', '#3a3a3a', '#282828']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.inputGradientContainer}
        >
          <TextInput
            style={[styles.input, { paddingRight: 50 }]}
            placeholder="Password"
            placeholderTextColor="#bbb"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
        </LinearGradient>

        {/* Date of Birth */}
        <View style={styles.dobGenderRow}>
          <Text style={styles.dobLabel}>Date Of Birth :</Text>
          <View style={styles.dobRow}>
            <TextInput
              style={styles.dobInput}
              placeholder="DD"
              placeholderTextColor="#bbb"
              keyboardType="numeric"
              value={dob.day}
              onChangeText={(day) => setDob({ ...dob, day })}
              maxLength={2}
            />
            <TextInput
              style={styles.dobInput}
              placeholder="MM"
              placeholderTextColor="#bbb"
              keyboardType="numeric"
              value={dob.month}
              onChangeText={(month) => setDob({ ...dob, month })}
              maxLength={2}
            />
            <TextInput
              style={styles.dobInput}
              placeholder="YY"
              placeholderTextColor="#bbb"
              keyboardType="numeric"
              value={dob.year}
              onChangeText={(year) => setDob({ ...dob, year })}
              maxLength={2}
            />
          </View>
        </View>

        {/* Gender Selection */}
        <View style={styles.dobGenderRow}>
          <View style={styles.genderRow}>
            {["Male", "Female"].map((g) => (
              <TouchableOpacity
                key={g}
                style={styles.genderOption}
                onPress={() => setGender(g)}
              >
                <LinearGradient
                  colors={gender === g ? ['#1DB954', '#1ED760'] : ['#282828', '#3a3a3a']}
                  style={styles.circle}
                >
                  {gender === g && <View style={styles.innerCircle} />}
                </LinearGradient>
                <Text style={styles.dobLabel}>{g}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <Text style={styles.orText}>Sign Up With</Text>
        </View>

        {/* Social login buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>G</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.signinText}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },

  logoTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    paddingHorizontal: 24,
    marginBottom: 70, // space between header and email
  },
  logo: { width: 50, height: 50, marginRight: 16 },
  headerText: { color: "#fff", fontSize: 45, fontWeight: "700", flexShrink: 1 },

  inputGradientContainer: {
    borderRadius: 25,
    marginBottom: 16,
    overflow: "hidden",
  },
  input: { backgroundColor: "transparent", color: "#fff", padding: 20, fontSize: 16 },

  dobGenderRow: { flexDirection: "row", alignItems: "center", marginBottom: 20, width: "100%" },
  dobRow: { flexDirection: "row", flex: 1, justifyContent: "space-between" },
  dobInput: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    width: 60,
    marginHorizontal: 4,
  },

  genderRow: { flexDirection: "row", flex: 1, justifyContent: "center" },
  genderOption: { flexDirection: "row", alignItems: "center", marginRight: 30 },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  innerCircle: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#1DB954" },
  dobLabel: { textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#1DB954', marginRight: 10, width: 120 },

  signUpButton: { backgroundColor: "#1DB954", borderRadius: 25, paddingVertical: 14, paddingHorizontal: 60, marginBottom: 20 },
  signUpText: { color: "#fff", fontSize: 16, fontWeight: "600", textAlign: "center" },
  signinText: { color: "#1DB954", fontSize: 16, fontWeight: "600", textAlign: "center" },

  dividerContainer: { marginBottom: 32 },
  orText: { textAlign: 'center', fontSize: 16, fontWeight: "bold", color: '#1DB954' },

  socialContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 32 },
  socialButton: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#1e1e1e', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 },
  socialText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },

  footer: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 15 },
  footerText: { color: "#727272", fontSize: 16 },
});
