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

export default function RegistrationScreen({ navigation }) {
  // console.log(auth.currentUser);
  const createUser = () => {
    setlowcaseMail(email.toLowerCase());
    auth
      .createUserWithEmailAndPassword(lowcaseMail, password)
      .then((data) => {
        // QUERY Firestore Ko Data Send Kar dain gai
        console.log("firebase return is = ", data);
        console.log("Good good");
        console.log(auth.currentUser.lowcaseMail);
        if (auth.currentUser != null) {
          navigation.navigate("ProfileScreen");
          console.log(auth);
        }

        db.collection("Student")
          .doc(lowcaseMail)
          .set({
            password: password,
            contact: contact,
            cgpa: cgpa,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      .catch((error) => {
        console.log("Catcdcdh Error", error);
        if (auth.currentUser == null) console.log(auth);
      });
  };

  const guestUser = () => {
    auth
      .signInAnonymously()
      .then((data) => {
        // QUERY Firestore Ko Data Send Kar dain gai
        console.log("firebase return is = ", data);
      })
      .catch((error) => {
        console.log("Catch Error", error);
      });
  };

  const logoutUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged in user is =", user);
        auth.signOut();
      } else {
        console.log("No One is =", user);
      }
    });
  };

  // useEffect(() => {
  //   const subscriber = db
  //     .collection("Student")
  //     // .getDoc("Jon@gmail.com")
  //     .doc("Jon@gmail.com")
  //     .get()
  //     .then((querySnapshot) => {
  //       console.log("Total users: ", querySnapshot.data().contact);
  //       // querySnapshot.forEach((documentSnapshot) => {
  //       //   console.log(
  //       //     "User ID: ",
  //       //     documentSnapshot.id,
  //       //     documentSnapshot.data()
  //       //   );
  //       // });
  //     });
  //   // return () => subscriber();
  // }, []);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [contact, setContact] = useState();
  const [cgpa, setCgpa] = useState();
  const [lowcaseMail, setlowcaseMail] = useState();
  return (
    <View style={styles.mainView}>
      <View style={{ flex: 0.1, alignItems: "center", marginTop: 20 }}>
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
        <TextInput
          placeholder="contact"
          style={styles.textInputStyle}
          keyboardType="numeric"
          onChangeText={(newContact) => setContact(newContact)}
        ></TextInput>
        <TextInput
          placeholder="CGPA"
          style={styles.textInputStyle}
          keyboardType="numeric"
          onChangeText={(newCgpa) => setCgpa(newCgpa)}
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 25, marginBottom: 20, alignSelf: "center" }}>
          Sign up with social account
        </Text>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          marginLeft: 15,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/googleicon.png")}
            style={styles.tinyLogo}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/instagramicon.png")}
            style={styles.tinyLogo}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/linkdinicon.png")}
            style={styles.tinyLogo}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.2, alignItems: "center" }}>
        <TouchableOpacity style={styles.submit} onPress={createUser}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.lastline}>Read User License Agreement</Text>
        </TouchableOpacity>
      </View>
    </View>

    //     <View
    //       style={{
    //         flex: 1,
    //         backgroundColor: "grey",
    //       }}
    //     >
    //       {/* <Text>Open up App.js to start working on your app! Thats Cool</Text>
    //       <Image style={styles.imageStyle} source={require("./assets/icon.png")} />
    //       <TextInput
    //         style={{
    //           backgroundColor: "lightgrey",
    //           marginBottom: 20,
    //           marginTop: 20,
    //         }}
    //       ></TextInput>
    //       <TouchableOpacity style={{ backgroundColor: "#DDDDDD", padding: 10 }}>
    //         <Text style={{ width: 220, backgroundColor: "pink" }}>Button</Text>
    //       </TouchableOpacity>
    //       <StatusBar style="auto" /> */}
    //       <View style={{ flex: 0.2, backgroundColor: "red", alignItems: "center" }}>
    //         <Image
    //           source={require("./assets/icon.png")}
    //           style={{
    //             width: 100,
    //             height: 100,
    //             alignSelf: "center",
    //             marginTop: 20,
    //           }}
    //         ></Image>
    //       </View>
    //       <View
    //         style={{ flex: 0.7, backgroundColor: "blue", alignItems: "center" }}
    //       >
    //         <TextInput
    //           style={{
    //             width: 100,
    //             height: 30,
    //             backgroundColor: "gray",
    //             marginBottom: 30,
    //             marginTop: 20,
    //           }}
    //           placeholder="name"
    //         ></TextInput>
    //         <TextInput
    //           style={{
    //             width: 100,
    //             height: 30,
    //             backgroundColor: "gray",
    //             marginBottom: 30,
    //           }}
    //           placeholder="password"
    //         ></TextInput>
    //         <TextInput
    //           style={{
    //             width: 100,
    //             height: 30,
    //             backgroundColor: "gray",
    //             marginBottom: 30,
    //           }}
    //           placeholder="email"
    //         ></TextInput>
    //         <TextInput
    //           style={{
    //             width: 100,
    //             height: 30,
    //             backgroundColor: "gray",
    //             marginBottom: 30,
    //           }}
    //           placeholder="Gender"
    //         ></TextInput>
    //         <TextInput
    //           style={{
    //             width: 100,
    //             height: 30,
    //             backgroundColor: "gray",
    //             marginBottom: 30,
    //           }}
    //           placeholder="City"
    //         ></TextInput>
    //       </View>
    //       <View
    //         style={{ flex: 0.1, backgroundColor: "orange", alignItems: "center" }}
    //       >
    //         <TouchableOpacity style={{ flex: 1 }}>
    //           <Text>Sign UP</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
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

    borderRadius: 15,
    height: "25%",
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
