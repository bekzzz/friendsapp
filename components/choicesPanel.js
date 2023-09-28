import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import AvailableChoices from "./availableChoices";

export default function ChoicesPanel({ obj, setObj, choicesByType }) {
  onSelect = () => {};

  return (
    <View>
      <AvailableChoices onSelect={onSelect} choices={choicesByType.choices} />
    </View>
  );
}

const styles = StyleSheet.create({});
