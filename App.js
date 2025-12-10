import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import APP_LOGO from "./assets/logo.png";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.logoContainer}>
        <Image source={APP_LOGO} style={styles.logo} />
      </View>

      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
});
