import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import HeaderReg from "../../components/headerReg";
import FooterReg from "../../components/footerReg";

//import firebase from 'firebase'; // Import Firebase and initialize it with your config

export default function MobileMessage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const nextView = "/register/inputCode";

  return (
    <View style={styles.container}>
      <HeaderReg message={message.header} />
      <View style={styles.subContainer}>
        <Text style={styles.inputLabel}>Introduce your phone number</Text>
        <TextInput
          style={styles.inputBar}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
      </View>
      <FooterReg message={message.footer} nextView={nextView} />
    </View>
  );
}

const message = {
  header: `Let's start the game`,
  footer: `That's how we roll !`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ccff",
  },
  inputLabel: {
    padding: 10,
  },
  subContainer: {
    margin: vh(2),
    marginTop: vh(4),
    height: vh(60),
  },
  inputBar: {
    width: vw(50),
    padding: 10,
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
  },
});
