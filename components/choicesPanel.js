import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import AvailableChoices from "./availableChoices";

export default function ChoicesPanel({ obj, setObj, choicesByType }) {
  const removeChoices = (element) => {
    const arrayCopy = obj.myChoices;
    const index = arrayCopy.indexOf(element.text);
    arrayCopy.splice(index, 1);
    return arrayCopy;
  };

  const addChoice = (element) => {
    const newArray = obj.myChoices;
    newArray.push(element.text);
    return newArray;
  };
  const onSelect = (element) => {
    if (!obj.myChoices || element.selected)
      setObj((oldObj) => ({ ...oldObj, myChoices: addChoice(element) }));
    else setObj((oldObj) => ({ ...oldObj, myChoices: removeChoices(element) }));
  };

  return (
    <View>
      <AvailableChoices
        onSelect={onSelect}
        choices={choicesByType.choices}
        myChoices={obj.myChoices}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
