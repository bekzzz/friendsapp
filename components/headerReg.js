import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Link, router } from "expo-router";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function HeaderReg({ onBack, message }) {
  const handleArrowClick = () => {
    onBack();
  };

  return (
    <View>
      <Pressable onPress={handleArrowClick} style={styles.arrow}>
        <Image
          style={styles.arrowImage}
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
      <Text style={styles.messageText}>Register</Text>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    marginTop: 20,
  },
  arrowImage: {
    width: 50,
    height: 50,
  },
  messageText: {
    marginTop: 10,
    fontSize: 30,
  },
});
