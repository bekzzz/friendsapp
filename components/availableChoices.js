import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function AvailableChoices({
  onSelect,
  myChoices,
  choices,
  numberOfChoices,
}) {
  const selectedChoice = () => {};
  const [selectedChoices, setSelectChoices] = useState(() => {
    const arrayAux = [];
    let selected = false;
    choices.forEach((element) => {
      selected = false;
      if (myChoices) {
        if (myChoices.includes(element)) selected = true;
      }
      arrayAux.push({ text: element, selected: selected });
    });
    return arrayAux;
  });

  const onClick = (element, index) => {
    let newArr = [...selectedChoices];
    newArr[index].selected = !newArr[index].selected;
    setSelectChoices(newArr);
    onSelect(element);
  };
  return (
    <View style={styles.container}>
      {!selectedChoices ? (
        <></>
      ) : (
        selectedChoices.map((element, index) => (
          <Pressable
            key={`register-${element.text}`}
            style={[
              styles.button,
              element.selected === true ? styles.border : styles.borderLess,
            ]}
            onPress={() => onClick(element, index)}
          >
            <Text style={styles.text}>{element.text} </Text>
          </Pressable>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap" },
  button: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    width: vw(25),
    padding: 10,
    borderRadius: 30,
    backgroundColor: "yellow",
  },
  borderLess: {
    borderColor: "blue",
  },
  border: {
    borderColor: "red",
  },
});
