import { Slot } from "expo-router";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ccff",
    alignItems: "center",
    justifyContent: "center",
  },
});
