import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";

//import firebase from 'firebase'; // Import Firebase and initialize it with your config

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLogin = async () => {
    try {
      // Call Firebase function to check if the user exists (You should implement this function in Firebase)
      // Example:
      //const userExists = await firebase.auth().signInWithEmailAndPassword(phoneNumber, password);
      
      if (true) {
        // User exists, perform login logic
        console.log('User logged in successfully');
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  };

  const onRegister = () => {
    navigation.navigate('/register'); // Navigate to the '/register' route
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>We-Zen</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
    <Pressable 
        style={styles.buttonLogin} 
        onPress={onLogin}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
    <Link href='/register' >
      <Pressable 
          style={styles.buttonRegister} >
        <Text style={styles.text}>New Member ? Click here to start an adventure of a lifetime !</Text>
      </Pressable>
    </Link>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30
  },
  buttonLogin:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: '30px',
    backgroundColor: 'green',
  },
  buttonRegister:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: '30px',
    backgroundColor: 'yellow',
  },

});

