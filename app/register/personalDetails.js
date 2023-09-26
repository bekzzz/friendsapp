import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Link } from "expo-router";

import HeaderReg from "../../components/headerReg";
import FooterReg from "../../components/footerReg";

//import firebase from 'firebase'; // Import Firebase and initialize it with your config

export default function InputCode() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const nextView = "/register/inputCode";

  return (
    <View>
      <HeaderReg message={message.header} />
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          placeholder="NickName"
          onChangeText={(text) => setNickName(text)}
          value={nickName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          onChangeText={(text) => setDOB(text)}
          value={DOB}
        />
      </View>
      <FooterReg message={message.footer} nextView={nextView} />
    </View>
  );
}

const message = {
  header: `Personal Details`,
  footer: `WoW !`,
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: vw(50),
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  subContainer: {
    margin: vh(2),
    marginTop: vh(4),
    height: vh(60),
  },
});
