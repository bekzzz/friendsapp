import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Link } from "expo-router";

import HeaderReg from "../../components/headerReg";
import FooterReg from "../../components/footerReg";

//import firebase from 'firebase'; // Import Firebase and initialize it with your config

export default function InputCode() {
  const [code, setCode] = useState("");
  const nextView = "/register/personalDetails";

  return (
    <View style={styles.container}>
      <HeaderReg message={message.header} />
      <View style={styles.subContainer}>
        <Text style={styles.inputLabel}>Introduce your code</Text>
        <TextInput
          style={styles.inputCode}
          maxLength={4}
          value={code}
          onChangeText={(text) => setCode(text)}
        />
        <Text>Dind't received the code ?</Text>
        <Link href="/">
          <Text>Resend it.</Text>
        </Link>
      </View>
      <FooterReg message={message.footer} nextView={nextView} />
    </View>
  );
}

const message = {
  header: `We just send you a message`,
  footer: `Keep Moving`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ccff",
  },
  inputLabel: {
    fontSize: 20,
  },
  inputCode: {
    height: vh(5),
    width: vw(15),
    borderWidth: 1,
    marginTop: vh(1),
  },
  subContainer: {
    margin: vh(2),
    marginTop: vh(4),
    height: vh(60),
  },
});
