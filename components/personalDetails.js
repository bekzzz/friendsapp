import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

//import firebase from 'firebase'; // Import Firebase and initialize it with your config

export default function PersonalDetails({ onCallback, setObj, obj }) {
  const onSubmit = () => {
    //const obj = { nickName, email, DOB };
    //onCallback(obj);
  };

  const onBack = () => {
    onCallback("back");
  };
  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="NickName"
          onChangeText={(text) =>
            setObj((oldObj) => ({
              ...oldObj,
              nickName: text,
            }))
          }
          value={obj.nickName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) =>
            setObj((oldObj) => ({
              ...oldObj,
              email: text,
            }))
          }
          value={obj.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          onChangeText={(text) =>
            setObj((oldObj) => ({
              ...oldObj,
              DOB: text,
            }))
          }
          value={obj.DOB}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
});
