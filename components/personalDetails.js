import { View, TextInput, StyleSheet } from "react-native";

export default function PersonalDetails({ setObj, obj }) {
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
