import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import AvailableChoices from "./availableChoices";

export default function ChoicesPanel({ obj, setObj, choicesByType }) {
  const removeChoices = (element) => {
    const arrayCopy = obj[choicesByType.type];
    const index = arrayCopy.indexOf(element.text);
    arrayCopy.splice(index, 1);
    return arrayCopy;
  };

  const addChoice = (element) => {
    const newArray = obj[choicesByType.type];
    newArray.push(element.text);
    return newArray;
  };
  const onSelect = (element) => {
    if (!obj[choicesByType.type] || element.selected)
      setObj((oldObj) => ({
        ...oldObj,
        [choicesByType.type]: addChoice(element),
      }));
    else
      setObj((oldObj) => ({
        ...oldObj,
        [choicesByType.type]: removeChoices(element),
      }));
  };

  return (
    <View>
      <AvailableChoices
        onSelect={onSelect}
        choices={choicesByType.choices}
        myChoices={obj[choicesByType.type]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
