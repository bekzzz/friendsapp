import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Link, router } from "expo-router";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function FooterReg({ onNext, message }) {
  const handleArrowClick = () => {
    onNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Pressable onPress={handleArrowClick}>
        <Image
          style={styles.arrowImage}
          source={require("../assets/foward-arrow.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: vh(5),
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    width: vw(72),
  },
  arrowImage: {
    width: vw(23),
    height: vh(5),
  },
});
