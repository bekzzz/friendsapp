import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import ScheduleChoices from "./scheduleChoices";

export default function SchedulePanel({ obj, setObj }) {
  const onSelect = (element) => {
    setObj((oldObj) => ({
      ...oldObj,
      tableSchedule: element,
    }));
  };

  return (
    <View>
      <ScheduleChoices onSelect={onSelect} obj={obj} />
    </View>
  );
}

const styles = StyleSheet.create({});
