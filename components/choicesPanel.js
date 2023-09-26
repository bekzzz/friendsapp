import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Link } from "expo-router";

import HeaderReg from "./headerReg";
import FooterReg from "./footerReg";

//import firebase from 'firebase'; // Import Firebase and initialize it with your config

export default function ChoicesPanel({ onCallback }) {
  const onChoose = () => {};

  const onBack = () => {
    onCallback("back");
  };

  return <View></View>;
}

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
