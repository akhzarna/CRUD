import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
// import ProfileScreen from './ProfileScreen';
import Top from "./Top";
import Center from "./Center";
import Bottom from "./Bottom";
import React, { Component, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firestore from '@react-native-firebase/firestore';
//its very important for crud
import { doc, setDoc, collection, addDoc, deleteDoc } from "firebase/firestore";
import DuaDetailPage from "./DuaDetailPage";
const firebaseConfig = {
  apiKey: "AIzaSyAluzyS0fILy6O120KS_Pc6aQx3Y9g-fXU",
  authDomain: "khadija1-6981e.firebaseapp.com",
  projectId: "khadija1-6981e",
  storageBucket: "khadija1-6981e.appspot.com",
  messagingSenderId: "15751978427",
  appId: "1:15751978427:web:194ccf1da1f95a70cb789e",
  measurementId: "G-W79VFKMG4T",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

//Duain.js start from here
export default function Duain({ navigation }) {
  const [name, setname] = useState("");
  const [Chapter, setChapter] = useState("");
  const [title, settitle] = useState("");
  const [Urdu, setUrdu] = useState("");
  const [Id, setId] = useState("");
  const [getdata, setgetdata] = useState([]);
  var counter = 0;
  useEffect(() => {
    global.setting = {
      fs: 50,
      fc: "green",
      bc: "white",
    };
    var array = [];
    //for getting data
    db.collection("dua")
      .get()
      .then((querySnapshot) => {
        console.log("Firestore Total users: ", querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          // console.log(
          //   "User ID: ",
          //   documentSnapshot.id,
          //   documentSnapshot.data()
          // );
          array.push(documentSnapshot.data());
          // console.log("array......", array);
        });
      })
      .then((e) => {
        setgetdata({ data: array });
      });
    console.log("useEffect");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* // showing getting data   */}
      <View
        style={{
          flex: 0.9,
          // backgroundColor: "grey"
        }}
      >
        <FlatList
          data={getdata.data}
          // horizontal={true}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#e6d1df",
                margin: 10,
                padding: "3%",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 25,
                  backgroundColor: "#91038a",
                  padding: "5%",
                }}
                onPress={() => {
                  navigation.navigate("DuaDetailPage", {
                    arabic: item.arabic_text,
                    translation: item.translation,
                    title: item.title,
                    intro: item.intro,
                  });
                }}
              >
                <Text style={{ fontSize: 20, color: "white" }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
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
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
    marginBottom: 10,
  },
});
