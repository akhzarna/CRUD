import React, { Component, useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnY_Ww6wH8CkV0jF7TbNqJa4FRDYUa6LE",
  authDomain: "bse-b-app-development.firebaseapp.com",
  projectId: "bse-b-app-development",
  storageBucket: "bse-b-app-development.appspot.com",
  messagingSenderId: "983590356787",
  appId: "1:983590356787:web:a86c159198fc10775da046",
  measurementId: "G-7EV4BWDWYW",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const user = auth.currentUser;
function LoginScreen({ navigation }) {
  // console.log(1224);
  // console.log(auth);

  const loginUser = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        // QUERY Firestore Ko Data Send Kar dain gai
        console.log("firebase return is = ", data);
        if (auth.currentUser != null) {
          // console.log(auth.currentUser);
          navigation.navigate("ProfileScreen");
        } else {
          const user = firebase.auth().currentUser;
          console.log("auth.current user empty");
        }
      })
      .catch((error) => {
        console.log("Catch Error", error);
      });
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.mainView}>
      <View style={{ flex: 0.2, alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 40, color: "blue" }}>Sign Up</Text>
      </View>
      <View style={{ flex: 0.5, alignItems: "center" }}>
        <TextInput
          placeholder="e-mail"
          style={styles.textInputStyle}
          onChangeText={(newEmail) => setEmail(newEmail)}
        ></TextInput>
        <TextInput
          placeholder="password"
          style={styles.textInputStyle}
          secureTextEntry={true}
          onChangeText={(newPassword) => setPassword(newPassword)}
        ></TextInput>
      </View>
      <View style={{ flex: 0.2, alignItems: "center" }}>
        <TouchableOpacity style={styles.submit} onPress={loginUser}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    //flex: 1,
    marginLeft: "5%",
    marginRight: "5%",
    borderColor: "Black",
    shadowOpacity: 0.4,
    shadowColor: "blue",
  },
  logo: {
    width: 66,
    height: 58,
  },
  submit: {
    alignItems: "center",
    width: "45%",
    backgroundColor: "blue",
    borderRadius: 25,
    height: "35%",
    justifyContent: "center",
    shadowOpacity: 0.4,
    borderColor: "blue",
    borderWidth: 1,
  },
  imageStyle: {
    width: 400,
    height: 400,
    backgroundColor: "green",
  },
  lastline: {
    paddingTop: 30,
  },
  textInputStyle: {
    marginBottom: 10,
    marginTop: 20,
    // width: "65%",
    // backgroundColor: "red",
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 100,
    fontSize: 16,
    shadowOpacity: 0.5,
    shadowColor: "blue",
  },
  mainView: {
    flex: 1,
    margin: StatusBar.currentHeight,
  },
});
export default LoginScreen;
