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
  FlatList,
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

function UpdateScreen({ navigation }) {
  return (
    <View>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <TextInput></TextInput>
    </View>
  );
}

export default UpdateScreen;
