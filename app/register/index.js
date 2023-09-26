import React, { useState } from "react";
import { Slot, router } from "expo-router";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import PersonalDetails from "../../components/personalDetails";
import InterestsPanel from "../../components/interestsPanel";
import FooterReg from "../../components/footerReg";
import HeaderReg from "../../components/headerReg";

export default function Register() {
  const [index, setIndex] = useState(0);
  const [obj, setObj] = useState({ nickName: "", email: "", DOB: "" });
  const onBack = () => {
    if (index === 0) {
      router.push("/");
    } else {
      setIndex(index - 1);
    }
  };

  const onNext = () => {
    if (index === 7) {
      //Call API to register user
    } else {
      if (index === 0) {
        let flag = 0;
        //Missing details
        for (const key in obj) {
          if (!obj[key]) {
            alert("Missing " + key);
            flag = 1;
          }
        }
        if (!flag) setIndex(index + 1);
      }
    }
  };
  const callback = (data) => {
    if (index === 0 && data === "back") {
      router.push("/");
    } else {
      if (data === "back") setIndex(index - 1);
      else setIndex(index + 1);
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
      component: InterestsPanel,
      props: { obj },
      header:
        "One step closer for a legendar experience ! Who are you ? Tell us more about yourself on the next steps, this will define the type of people you will meet !",
      footer: "Are you ready ?",
    },
  ];
  //const components = [PersonalDetails, InterestsPanel];
  const {
    component: RenderComponent,
    props,
    header,
    footer,
  } = components[index];
  //const RenderComponent = components[index];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderReg onBack={onBack} message={header} />
      </View>
      <View style={styles.middleSection}>
        <RenderComponent onCallback={callback} {...props} />
      </View>
      <View style={styles.footer}>
        <FooterReg message={footer} onNext={onNext} />
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
