import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';



export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Simple validation
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    router.replace("/drawer");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image
        source={require("@/assets/images/SPOTIFY/SpotifyLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Spotify Title */}
      <Text style={styles.subtitle}>Spotify</Text>

{/* Username */}
<LinearGradient
  colors={['#282828', '#3a3a3a', '#282828']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.inputGradientContainer}
>
  <TextInput
    style={styles.input}
    placeholder="Email or username"
    placeholderTextColor="#bbb"
    value={username}
    onChangeText={setUsername}
    autoCapitalize="none"
    keyboardType="email-address"
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


       {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>

      <LinearGradient
        colors={['#1DB954', '#1ed760']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.loginButton}
      >
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.gradientButtonTouchable}
        >
          <Text style={styles.signinButtonText}>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>




      {/* Divider */}
      <View style={styles.dividerContainer}>
        <Text style={styles.orText}>Be Correct With</Text>
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
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 24,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 48,
  },
inputGradientContainer: {
  borderRadius: 25,
  marginBottom: 16,
  paddingHorizontal: 16,
  justifyContent: 'center',
  height: 50,
  overflow: 'hidden', // ensures the gradient respects rounded corners
},
input: {
  color: '#fff',
  fontSize: 16,
},

loginButton: {
  height: 50,
  borderRadius: 25,
  marginBottom: 20,
  overflow: 'hidden',
},

gradientButtonTouchable: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

signinButtonText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
  textAlign: 'center',
},

forgotPasswordContainer: {
  alignSelf: 'flex-end',
  marginBottom: 32,
},
forgotPassword: {
  color: "#727272",
  fontSize: 16,
},

  dividerContainer: {
    marginBottom: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#727272",
  },
  orText: {

    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: '#1DB954',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  socialText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  footerText: {
    color: "#727272",
    fontSize: 16,
  },
  signUpText: {
    color: '#1DB954',
    fontSize: 16,
    fontWeight: "600",
  },
});