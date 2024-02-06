import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import MapView from "react-native-maps";
export default function ScheduleChoices({ onSelect, obj }) {
  const selectedChoice = () => {};
  const [selectedChoices, setSelectChoices] = useState(() => {
    let arrayAux = [];
    let array2DAux = [];
    obj.tableSchedule.forEach((day) => {
      array2DAux = [];
      day.forEach((time) => {
        array2DAux.push(time);
      });
      arrayAux.push(array2DAux);
    });
    return arrayAux;
  });

  const onTileClick = (indexDay, indexTime) => {
    let newArr = [...selectedChoices];
    newArr[indexDay][indexTime] === 0
      ? (newArr[indexDay][indexTime] = 1)
      : (newArr[indexDay][indexTime] = 0);
    setSelectChoices(newArr);
    onSelect(newArr);
  };
  const onTimeClick = (indexTime) => {
    let newArr = [...selectedChoices];
    let flag,
      i = 0;
    while (!flag && newArr.length > i) {
      if (newArr[i][indexTime] === 0) flag = 1;
      else i++;
    }
    newArr.forEach((element) => {
      if (flag) element[indexTime] = 1;
      else element[indexTime] = 0;
    });
    setSelectChoices(newArr);
    onSelect(newArr);
  };
  const onDayClick = (indexDay) => {
    let newArr = [...selectedChoices];
    let flag,
      i = 0;
    while (!flag && newArr[indexDay].length > i) {
      if (newArr[indexDay][i] === 0) flag = 1;
      else i++;
    }
    newArr[indexDay].map((element, index) => {
      if (flag) newArr[indexDay][index] = 1;
      else newArr[indexDay][index] = 0;
    });
    setSelectChoices(newArr);
    onSelect(newArr);
  };

  const onClearAll = () => {
    let newArr = [...selectedChoices];
    newArr.map((element, indexDay) => {
      element.map((time, index) => {
        newArr[indexDay][index] = 0;
      });
    });
    setSelectChoices(newArr);
    onSelect(newArr);
  };

  const onSelectAll = () => {
    let newArr = [...selectedChoices];
    newArr.map((element, indexDay) => {
      element.map((time, index) => {
        newArr[indexDay][index] = 1;
      });
    });
    setSelectChoices(newArr);
    onSelect(newArr);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.empty]}></Text>
        {times.map((element, index) => {
          return (
            <>
              <Pressable
                key="{`schedule-time-${element}`}"
                style={[styles.time]}
                onPress={() => {
                  onTimeClick(index);
                }}
              >
                <Text>{element}</Text>
              </Pressable>
            </>
          );
        })}
        {selectedChoices.map((day, indexDay) => {
          return (
            <>
              <View key={day} style={styles.scheduleContainer}>
                <Pressable
                  key="{`schedule-day-${element}`}"
                  style={[styles.day]}
                  onPress={() => {
                    onDayClick(indexDay);
                  }}
                >
                  <Text>{days[indexDay]}</Text>
                </Pressable>
                {day.map((time, indexTime) => {
                  return (
                    <>
                      <Pressable
                        key="{`schedule-${days[indexDay]}-${times[indexTime]}`}"
                        style={[
                          styles.button,
                          time ? styles.isSelected : styles.isNotSelected,
                        ]}
                        onPress={() => {
                          onTileClick(indexDay, indexTime);
                        }}
                      ></Pressable>
                    </>
                  );
                })}
              </View>
            </>
          );
        })}
      </View>
      <Pressable
        key="clear-all"
        style={[styles.buttonAll]}
        onPress={() => {
          onClearAll();
        }}
      >
        <Text>Clear All</Text>
      </Pressable>
      <Pressable
        key="select-all"
        style={[styles.buttonAll]}
        onPress={() => {
          onSelectAll();
        }}
      >
        <Text>Select All</Text>
      </Pressable>
      <MapView style={styles.map} />
    </View>
  );
}
const days = ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
const times = ["5h-7h", "8h-10h", "11h-13h", "14h-16h", "17h-19h", "20h-22h"];
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "green",
    height: vh(40),
  },
  button: {
    height: 30,
    margin: 5,
    borderWidth: 1,
    width: vw(8),
    padding: 1,
    borderRadius: 10,
    backgroundColor: "red",
  },
  buttonAll: {
    height: 25,
    margin: 5,
    borderWidth: 1,
    width: vw(20),
    padding: 1,
    borderRadius: 30,
    backgroundColor: "white",
  },
  time: {
    height: 30,
    margin: 5,
    borderWidth: 1,
    width: vw(16),
    padding: 5,
    borderRadius: 30,
    backgroundColor: "green",
  },
  day: {
    height: 30,
    margin: 5,
    borderWidth: 1,
    width: vw(8),
    padding: 1,
    backgroundColor: "yellow",
  },
  empty: {
    height: 30,
    margin: 5,
    width: vw(16),
    padding: 5,
    borderRadius: 30,
    backgroundColor: "#00ccff",
  },
  isSelected: {
    backgroundColor: "green",
  },
  isNotSelected: {
    backgroundColor: "red",
  },
  map: {
    width: vw(5),
    height: vh(5),
  },
});
