import React, { useState } from "react";
import { router } from "expo-router";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import PersonalDetails from "../../components/personalDetails";
import EmptyComponent from "../../components/emptyComponent";
import FooterReg from "../../components/footerReg";
import HeaderReg from "../../components/headerReg";
import ChoicesPanel from "../../components/choicesPanel";
import ScheduleChoices from "../../components/scheduleChoices";
import SchedulePanel from "../../components/schedulePanel";

export default function Register() {
  const [index, setIndex] = useState(0);
  const [obj, setObj] = useState({
    nickName: "Becas",
    email: "brunobecasmoura@gmail.com",
    DOB: "3/04/1991",
    interests: ["Sport"],
    tableSchedule: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ],
  });
  const choicesByType = {
    type: "interests",
    choices: ["Sport", "Art", "Travel", "Technology", "Photography", "Science"],
  };
  const onBack = () => {
    console.log(JSON.stringify(obj));
    if (index === 0) {
      router.push("/");
    } else {
      setIndex(index - 1);
    }
  };

  const onNext = () => {
    //Personal Details
    if (index === 0) {
      let flag = 0;
      for (const key in obj) {
        //Missing personal details
        if (!obj[key]) {
          //alert("Missing " + key);
          flag = 1;
        }
      }
      if (!flag) setIndex(index + 1);
    }
    //Message
    if (index === 1) {
      setIndex(index + 1);
    }
    //Interests
    if (index === 2) {
      if (obj.interests.length > 1 || obj.interests.length === 0) {
        alert("Just one interest to move forward ! Let's go !");
      } else {
        setIndex(index + 1);
      }
    }
    if (index === 3) {
      setIndex(index + 1);
    }
    if (index === 4) {
    }
    if (index === 5) {
    }
    if (index === 6) {
    }
    if (index === 7) {
      //Call API to register user
    }
  };

  const components = [
    {
      component: PersonalDetails,
      props: { obj, setObj },
      header: "Personal Details",
      footer: "WoW !",
    },
    {
      component: EmptyComponent,
      props: { obj },
      header:
        "One step closer for a legendary experience ! Who are you ? Tell us one of your interests...!",
      footer: "Are you ready ?",
    },
    {
      component: ChoicesPanel,
      props: { obj, setObj, choicesByType },
      header: `Interests (${obj.interests.length}/1)`,
      footer: "IRLM at the oven",
    },
    {
      component: EmptyComponent,
      props: { obj },
      header: "Cooooooooooooool ",
      footer: "Are you ready ?",
    },
    {
      component: SchedulePanel,
      props: { obj, setObj },
      header: `Schedule`,
      footer: "Almost there",
    },
  ];
  const {
    component: RenderComponent,
    props,
    header,
    footer,
  } = components[index];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderReg onBack={onBack} message={header} />
      </View>
      <View style={styles.middleSection}>
        <RenderComponent {...props} />
      </View>
      <View style={styles.footer}>
        <FooterReg onNext={onNext} message={footer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ccff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: vh(25),
    width: vw(95),
    marginRight: vw(2),
    marginLeft: vw(5),
  },
  middleSection: {
    width: vw(92),
    height: vh(60),
    marginRight: vw(2),
    marginLeft: vw(2),
  },
  footer: {
    height: vh(10),
    width: vw(95),
    marginRight: vw(2),
    marginLeft: vw(2),
  },
});
