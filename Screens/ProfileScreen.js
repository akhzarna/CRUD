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

function ProfileScreen({ navigation }) {
  const updateData = () => {
    db.collection("Student")
      .doc(email)
      .update({
        cgpa: cgpa < 2 ? 3 : 1,
      })
      .then(() => {
        console.log("User updated!");
        setCgpa();
      });
  };

  const deleteData = () => {
    db.collection("Student")
      .doc(email)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            user
              .delete()
              .then(() => {
                console.log("User Auth deleted");
              })
              .catch((error) => {
                console.log("signout unsuccessful");
              });
            var uid = user.uid;
          } else {
            console.log("no user");
          }
        });

        // navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const loadData = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.email;
        // console.log(uid);
        // console.log(auth.currentUser.email);
        // console.log(4);
        // console.log(auth.currentUser.email);
        // console.log(4);
        if (uid != null) {
          // console.log(6);
          // console.log(uid);
          // console.log(typeof uid);
          // console.log(6);
          const sub = await db
            .collection("Student")
            .doc(uid)
            .get()
            .then((querySnapshot) => {
              // console.log(querySnapshot);
              // console.log(querySnapshot.data().cgpa);
              setCgpa(querySnapshot.data().cgpa);
              setContact(querySnapshot.data().contact);
              setEmail(querySnapshot.id);
              // console.log(1);
              // console.log(querySnapshot.data().contact);
              // console.log(3);
              // console.log(querySnapshot.data().cgpa);
              // console.log("Firestore Total users: ", querySnapshot.size);
              // querySnapshot.forEach((documentSnapshot) => {
              //   console.log(
              //     "User ID: ",
              //     documentSnapshot.id,
              //     documentSnapshot.data()
              //   );
              // });
            })
            .catch((error) => {
              console.log("Cabhbjtch Error", error);
            });
        } else {
          console.log("No user signed in");
        }
      }
    });
  };

  useEffect(() => {
    if (auth.currentUser != null) {
      // console.log(auth.currentUser);
      loadData();
    }
  });

  const [email, setEmail] = useState();

  const [contact, setContact] = useState();
  const [cgpa, setCgpa] = useState();
  return (
    <View style={styles.mainView}>
      <View style={styles.secondView}>
        <Text style={styles.text}>Email Address</Text>
        <Text style={styles.textValue}>{email}</Text>
        <Text style={styles.text}>Contact</Text>
        <Text style={styles.textValue}>{contact}</Text>

        <Text style={styles.text}>CGPA</Text>
        <Text style={styles.textValue}>{cgpa}</Text>
        <View>
          <Button title="Update" color="#9373FA" onPress={updateData} />
          <Button title="Delete" color="#9373FA" onPress={deleteData} />
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#9373FA",
    justifyContent: "center",
  },
  secondView: {
    backgroundColor: "white",

    height: "95%",
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#9373FA",
  },
  textValue: {
    marginTop: 30,
    marginBottom: 30,
  },
});

// git clone link
// git checkout -b areeb
//npm i
//sara kam ker dia
// git add .
// git commit -m "message "
// git push origin areeb
