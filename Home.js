
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// // import ProfileScreen from './ProfileScreen';
// import Top from './Top';
// import Center from './Center';
// import Bottom from './Bottom';
// import React, { Component, useEffect, useState } from 'react';


// //   // Import the functions you need from the SDKs you need
// //   import firebase, { initializeApp } from "firebase/app";
// //   // import * as firebase from "firebase";

// //   // import firebase from 'firebase/app';
// //   import 'firebase/auth';
// //   import 'firebase/firestore';

// //   // import * as firebase from "firebase";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyA3__9va2vzu-4x_9qWHDn4ntnXGoTkn50",
// //   authDomain: "fir-expo-fa5da.firebaseapp.com",
// //   projectId: "fir-expo-fa5da",
// //   storageBucket: "fir-expo-fa5da.appspot.com",
// //   messagingSenderId: "687421685940",
// //   appId: "1:687421685940:web:e3679f8a95c51c78f857e1"
// // };

// // // Initialize Firebase
// // initializeApp(firebaseConfig);


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyDhlmHLvYayhhMna9rLh3pM4f8f--jfeA4",
//   authDomain: "bseb-f0d27.firebaseapp.com",
//   projectId: "bseb-f0d27",
//   storageBucket: "bseb-f0d27.appspot.com",
//   messagingSenderId: "142210169144",
//   appId: "1:142210169144:web:d11233da3e21fbe6c729cd"
// };

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();
// const dbreal = app.database('https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app');

// // const dbreal = app.database('https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app');
// // Please change your database URL to https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app (https://bseb-f0d27-default-rtdb.firebaseio.com/)

// export default function Home({navigation}) {

//   const [data, setData] = useState();
//   const createUser = () => {
//     auth.createUserWithEmailAndPassword('akhzarn@yahoo.com','123456')
//     .then( data =>{
//       // QUERY Firestore Ko Data Send Kar dain gai
//       console.log('firebase return is = ',data)
//     }).catch(error=>{
//       console.log('Catch Error',error)
//     })
//   }
  
//   const loginUser = () => {
//     auth.signInWithEmailAndPassword('akhzarn@yahoo.com','123456')
//     .then( data =>{
//       // QUERY Firestore Ko Data Send Kar dain gai
//       console.log('firebase return is = ',data)
//     }).catch(error=>{
//       console.log('Catch Error',error)
//     })
//   }
  
//   const guestUser = () => {
//     auth.signInAnonymously()
//     .then( data =>{
//       // QUERY Firestore Ko Data Send Kar dain gai
//       console.log('firebase return is = ',data)
//     }).catch(error=>{
//       console.log('Catch Error',error)
//     })
//   }
  
//   const logoutUser = () => {
//     auth.onAuthStateChanged(user=>{
//       if(user){
//         console.log('Logged in user is =', user)
//         auth.signOut()
//       }else{
//         console.log('No One is =', user)
//       }
//     })
//   }

//   useEffect(()=>{

//     global.setting={
//       fs:50,
//       fc:'green',
//       bc:'white'
//     }


//       // db.collection('student')
//       //   .doc('R3v1dlrtVX8GBBsho4eS')
//       //   .onSnapshot(documentSnapshot => {
//       //     console.log('User data: ', documentSnapshot.data());
//       //   });
//       // Stop listening for updates when no longer required
//       // return () => subscriber();
        
//   // const subscriber = db

//   // .where('campus','in',['Comsats','UET','PUCIT','Superior'])
//   // .where('rollno','>=',2)
//   // .orderBy('age', 'desc')
//   // 

//   // .orderBy('age', 'desc')
//   // .startAt(18)
//   // .endAt(30)

//   // db.collection('student')
//   // .orderBy('rollno', 'asc')
//   // .get()
//   // .then(querySnapshot => {
//   //   console.log('Firestore Total users: ', querySnapshot.size);
//   //   querySnapshot.forEach(documentSnapshot => {
//   //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//   //   });
//   // });

//   // db.collection('student')
//   // .doc('1234')
//   // .update({
//   //   rollno: 340,
//   // })
//   // .then(() => {
//   //   console.log('User updated!');
//   // });


//   db.collection('student')
//   .doc('umer')
//   .add({
//     campus: 'Pak Aims',
//     rollno: 1,
//     name:'Salman',
//     class:'BSE B',
//     key:10
//   })
//   .then(() => {
//     console.log('User added!');
//   });


//   // firestore()
//   // .collection('Users')
//   // .doc('ABC')
//   // .set({
//   //   name: 'Ada Lovelace',
//   //   age: 30,
//   // })
//   // .then(() => {
//   //   console.log('User added!');
//   // });


//   // firestore()
//   // .collection('Users')
//   // .doc('ABC')
//   // .update({
//   //   age: 31,
//   // })
//   // .then(() => {
//   //   console.log('User updated!');
//   // });


//   // return () => subscriber();
  
//   console.log('useEffect')

//   // limitToLast
//   // limitToFirst
//   // .ref('/universities').limitToFirst(2)
//   // .ref('/universities').limitToLast(2)
//   // .ref('/universities').orderByChild("name").equalTo("COMSATS")

//   // dbreal
//   // .ref('/universities').orderByChild("name").equalTo("COMSATS")
//   // .on('value', snapshot => {
//   //   console.log('Real Time User data: ', snapshot.val());
//   //   setData(snapshot.val())
//   // });

//   }, [])

//   const [fonts, setFonts] = useState(16)

//   useEffect(() => {
//     // console.log('navigation useEffect is =')
//     const unsubscribe = navigation.addListener('focus', () => {
//       setFonts(global.setting.fs)
      
//       console.log('navigation useEffect is Called=', global.setting)

//     });
//     return unsubscribe;
//   }, [navigation]);

//   return (
//     <View style={{flex:1, backgroundColor:'white'}}>
      
//       {
//         // console.log('User data: ', data)
//       }

//       <Text style={{fontSize:fonts}}> We are testing </Text>

//       {/* <Button
//           title="Go to Next Screen"
//           onPress={() =>
//           navigation.navigate('ProfileScreen',{id:'hef34231'})
//         }
//         /> */}
      
//       {/* <Button
//           title="Go to Setting Screen"
//           onPress={() =>
//           navigation.navigate('Settings', { name: 'Akhzar' })
//         }
//         /> */}

//         {/* <Button
//           title="Go to Chatting Screen"
//           onPress={() =>
//           navigation.navigate('Chatting',{id:'bcs1920cs'})
//         }
//         /> */}

//       <Button
//           title="Go to Next Functional Component"
//           onPress={() =>
//             navigation.navigate('HomeForFunctional')
//           }
//         />

//       <Button
//           title="Go to Next Class Component"
//           onPress={() =>
//             navigation.navigate('HomeForClass')
//           }
//         />

//       <Button
//           title="Create USer"
//           onPress={createUser}
//         />
     
//      <Button
//           title="Firebase Sign In"
//           onPress={loginUser}
//         />
     
//      <Button
//           title="Guest User"
//           onPress={guestUser}
//         />

//     <Button
//           title="Log Out User"
//           onPress={logoutUser}
//         />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });







// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// // // import ProfileScreen from './ProfileScreen';
// // import Top from './Top';
// // import Center from './Center';
// // import Bottom from './Bottom';
// // import React, { Component, useEffect, useState } from 'react';

// // var flag = 12;

// // export default class Home extends Component {

// //   constructor(props){
// //     super(props)
// //     this.state={
// //       count: 0
// //     }
// //   }

// //   static getDerivedStateFromProps(){
// //     console.log('getDerivedStateFromProps')
// //   }

// //   componentDidMount(){
// //     console.log('didMount')
// //   }

// //   getSnapshotBeforeUpdate(){
// //     console.log('getSnapshotBeforeUpdate')
// //     return null;
// //   }

// //   componentDidUpdate(){
// //     console.log('componentDidUpdate')
// //   }

// //   shouldComponentUpdate(){
// //     return true
// //   }

// // //   static getDerivedStateFromProps()
// // // shouldComponentUpdate()
// // // render()
// // // getSnapshotBeforeUpdate()
// // // componentDidUpdate()

// // // const [count, setCount] = useState(13);
// // // const [number, setNumber] = useState(90);
// // // const [state, setState] = useState(
// // //   {
// // //     name:'',
// // //     class:'',
// // //   }
// // // )

// // // useEffect(()=>{
// // //     console.log('Home useEffect []')
// // //     // flag=120
// // //     // setCount(count+2)
// // //     // console.log('useEffect flag Value is =',flag)
// // //     return()=>{
// // //       console.log('Home useEffect return []');
// // //     }
// // // },[])

// // // useEffect(()=>{
// // //     console.log('useEffect [count]')
// // //     // flag=120
// // //     // setCount(count+2)
// // //     // console.log('useEffect flag Value is =',flag)
// // // },[count])

// // // useEffect(()=>{
// // //     console.log('useEffect [number]')
// // //     // flag=120
// // //     // setCount(count+2)
// // //     // console.log('useEffect flag Value is =',flag)
// // // },[number])


// // //   useEffect(()=>{
// // //     flag = 190;
// // //     console.log('useEffect []', flag);
// // //     // setCount(count+1);
// // //     return()=>{
// // //       // console.log('after useEffect');
// // //     }
// // //   },[])

// // //   useEffect(()=>{
// // //     flag = 190;
// // //     console.log('useEffect [count]', flag);
// // //     // setCount(count+1);
// // //     return()=>{
// // //       // console.log('after useEffect');
// // //     }
// // //   },[count])

// // //   useEffect(()=>{
// // //     flag = 190;
// // //     console.log('useEffect [number]', flag);
// // //     // setCount(count+1);
// // //     return()=>{
// // //       // console.log('after useEffect');
// // //     }
// // //   },[number])

// // //   useEffect(()=>{
// // //     flag = 190;
// // //     console.log('useEffect [props]', flag);
// // //     // setCount(count+1);
// // //     return()=>{
// // //       // console.log('after useEffect');
// // //     }
// // //   },[props])

// //   // useEffect(()=>{
// //   //   flag = 190;
// //   //   console.log('useEffect', flag);
// //   //   setCount(count+1);
// //   // },[props])
  
// //   render(){
// //   return (
// //     <View style={{flex:1, backgroundColor:'black'}}>
// //       {console.log('Return')}
      
// //       {/* <Top name="Akhzar Nazir" /> */}
// //       {/* <Center /> */}
// //       {/* <Bottom /> */}

// //       <Button
// //           title="Go to Next Screen"
// //           onPress={() =>
// //           this.props.navigation.navigate('ProfileScreen',{id:'hef34231'})
// //         }
// //         />

// //       <Button title='Minus' onPress={()=>this.setState({count:1})} />
      
// //       <Button
// //           title="Go to Setting Screen"
// //           onPress={() =>
// //           this.props.navigation.navigate('Settings', { name: 'Akhzar' })
// //         }
// //         />

// //     {/* <Button title='PLUS' onPress={()=>setCount(count+1)} />
      
// //     <Button title='Minus' onPress={()=>setCount(count-1)} />
    
// //     <Button title='Number' onPress={()=>setNumber(number+1)} /> */}
     
// //     </View>
// //   );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
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

//   // Import the functions you need from the SDKs you need
//   import firebase, { initializeApp } from "firebase/app";
//   // import * as firebase from "firebase";

//   // import firebase from 'firebase/app';
//   import 'firebase/auth';
//   import 'firebase/firestore';

//   // import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3__9va2vzu-4x_9qWHDn4ntnXGoTkn50",
//   authDomain: "fir-expo-fa5da.firebaseapp.com",
//   projectId: "fir-expo-fa5da",
//   storageBucket: "fir-expo-fa5da.appspot.com",
//   messagingSenderId: "687421685940",
//   appId: "1:687421685940:web:e3679f8a95c51c78f857e1"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCK2gse2S4gzT4tqStLYR-ub81aLiV07Ig",
//   authDomain: "bcs20-ce9d9.firebaseapp.com",
//   projectId: "bcs20-ce9d9",
//   storageBucket: "bcs20-ce9d9.appspot.com",
//   messagingSenderId: "700617627214",
//   appId: "1:700617627214:web:a9c1fc4aeacbd5d178151f"
// };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firestore from '@react-native-firebase/firestore';
//its very important for crud
import { doc, setDoc, collection, addDoc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export default function Home({ navigation }) {
  // const [userdata, setuserdata] = useState([]);
  // const [newdata, setnewdata] = useState({});
  const [name, setname] = useState("");
  const [dept, setdept] = useState("");
  const [job, setjob] = useState("");
  const [key, setkey] = useState("");
  const [getsahihbukharidata, setgetsahihbukharidata] = useState([]);
  var counter = 5
  useEffect(() => {
    global.setting = {
      fs: 50,
      fc: "green",
      bc: "white",
    };
    var array = [];
    //for getting data
    db.collection("students")
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
        });
      })
      .then((e) => {
        setgetsahihbukharidata({ data: array });
      });
    console.log("useEffect");
  }, []);
  
  const addUser = (e) => {
    // Add a new document in collection "students" with id
    // setDoc(doc(db, "students",6), {
    //   name: name,
    //   dept: dept,
    //   job: job,
    // });
    // Add a new document in collection "students" with autogenerated id
    addDoc(collection(db, "students"), {
      name: name,
      dept: dept,
      job: job,
      // key: key,
    })
      .then((e) => {
        console.log("Data submitted");
      })
      .catch((e) => {
        console.log("Data not submitted");
      });
  };
  const DeleteRecord = (key) => {
    deleteDoc(doc(db, "students", "key"))
    // deleteDoc(collection(db, "students"))
    .then((e) => {
      console.log("Data Deleted");
    })
    .catch((e) => {
      console.log("Data not Deleted");
    });
    // firestore()
    // .collection('students')
    // .doc('Nimra')
    // .delete()
    // .then(() => {
    //   console.log('User deleted!');
    // });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      <View style={{ flex: 0.4, backgroundColor: "#eab676" }}>
        <TextInput
          placeholder="Name"
          style={styles.textBoxes}
          value={name}
          onChangeText={(name) => setname(name)}
        ></TextInput>
        <TextInput
          placeholder="Department"
          style={styles.textBoxes}
          value={dept}
          onChangeText={(dept) => setdept(dept)}
        ></TextInput>
        <TextInput
          placeholder="Job"
          style={styles.textBoxes}
          value={job}
          onChangeText={(job) => setjob(job)}
        ></TextInput>
        {/* <TextInput
          placeholder="Key"
          style={styles.textBoxes}
          value={key}
          onChangeText={(key) => setkey(key)}
        ></TextInput> */}
        <TouchableOpacity
          style={{
            width: 150,
            height: 30,
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 150,
            backgroundColor: "#1e81b0",
            borderRadius: 7,
          }}
          onPress={addUser}
        >
          <Text style={{ paddingLeft: 30 }}> Add Data </Text>
        </TouchableOpacity>
      </View>
      {/* // showing getting data   */}
      <View style={{ flex: 0.6, backgroundColor: "grey" }}>
        <FlatList
          data={getsahihbukharidata.data}
          // horizontal={true}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#1e81b0",
                marginBottom: 10,
                height: 100,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                Name:{item.Name}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                Department :{item.Dept}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                Job:{item.job}
              </Text>
              {/* <Text style={{ fontSize: 20, color: "white" }}>
                Id:{item.key}
              </Text> */}
              <TouchableOpacity
                style={{
                  fontSize: 20,
                  backgroundColor: "red",
                  borderRadius: 5,
                  flexDirection: "row",
                }}
                onPress={DeleteRecord(item.key)}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* {console.log("getsahihbukharidata",getsahihbukharidata)} */}
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
