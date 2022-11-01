
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';
import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import React, { Component, useEffect, useState } from 'react';


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


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBTHwMzlnx3pwIwtzD1cQNgk68nEsj6meY",
  authDomain: "bseb-1ce51.firebaseapp.com",
  projectId: "bseb-1ce51",
  storageBucket: "bseb-1ce51.appspot.com",
  messagingSenderId: "430232221189",
  appId: "1:430232221189:web:3e9d2de6d6a27a6851ce6c"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

export const db = app.firestore();
export const auth = firebase.auth();
const dbreal = app.database('https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app');

// const dbreal = app.database('https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app');
// Please change your database URL to https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app (https://bseb-f0d27-default-rtdb.firebaseio.com/)

export default function Home({navigation}) {

  const [data, setData] = useState();
  const createUser = () => {
    auth.createUserWithEmailAndPassword('akhzarn@yahoo.com','123456')
    .then( data =>{
      // QUERY Firestore Ko Data Send Kar dain gai
      console.log('firebase return is = ',data)
    }).catch(error=>{
      console.log('Catch Error',error)
    })
  }
  
  const loginUser = () => {
    auth.signInWithEmailAndPassword('akhzarn@yahoo.com','123456')
    .then( data =>{
      // QUERY Firestore Ko Data Send Kar dain gai
      console.log('firebase return is = ',data)
    }).catch(error=>{
      console.log('Catch Error',error)
    })
  }
  
  const guestUser = () => {
    auth.signInAnonymously()
    .then( data =>{
      // QUERY Firestore Ko Data Send Kar dain gai
      console.log('firebase return is = ',data)
    }).catch(error=>{
      console.log('Catch Error',error)
    })
  }
  
  const logoutUser = () => {
    auth.onAuthStateChanged(user=>{
      if(user){
        console.log('Logged in user is =', user)
        auth.signOut()
      }else{
        console.log('No One is =', user)
      }
    })
  }

  useEffect(()=>{

    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }


      // db.collection('student')
      //   .doc('R3v1dlrtVX8GBBsho4eS')
      //   .onSnapshot(documentSnapshot => {
      //     console.log('User data: ', documentSnapshot.data());
      //   });
      // Stop listening for updates when no longer required
      // return () => subscriber();
        
  // const subscriber = db

  // .where('campus','in',['Comsats','UET','PUCIT','Superior'])
  // .where('rollno','>=',2)
  // .orderBy('age', 'desc')
  // 

  // .orderBy('age', 'desc')
  // .startAt(18)
  // .endAt(30)

  // db.collection('student')
  // .orderBy('rollno', 'asc')
  // .get()
  // .then(querySnapshot => {
  //   console.log('Firestore Total users: ', querySnapshot.size);
  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //   });
  // });

  // db.collection('student')
  // .doc('1234')
  // .update({
  //   rollno: 340,
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });


  db.collection('student')
  .add({
    campus: 'Pak Aims',
    rollno: 1,
    name:'Salman',
    class:'BSE B',
    key:10
  })
  .then(() => {
    console.log('User added!');
  });


  // firestore()
  // .collection('Users')
  // .doc('ABC')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });


  // firestore()
  // .collection('Users')
  // .doc('ABC')
  // .update({
  //   age: 31,
  // })
  // .then(() => {
  //   console.log('User updated!');
  // });


  // return () => subscriber();
  
  console.log('useEffect')

  // limitToLast
  // limitToFirst
  // .ref('/universities').limitToFirst(2)
  // .ref('/universities').limitToLast(2)
  // .ref('/universities').orderByChild("name").equalTo("COMSATS")

  // dbreal
  // .ref('/universities').orderByChild("name").equalTo("COMSATS")
  // .on('value', snapshot => {
  //   console.log('Real Time User data: ', snapshot.val());
  //   setData(snapshot.val())
  // });

  }, [])

  const [fonts, setFonts] = useState(16)

  useEffect(() => {
    // console.log('navigation useEffect is =')
    const unsubscribe = navigation.addListener('focus', () => {
      setFonts(global.setting.fs)
      
      console.log('navigation useEffect is Called=', global.setting)

    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      
      {
        // console.log('User data: ', data)
      }

      <Text style={{fontSize:fonts}}> We are testing Crud </Text>

      {/* <Button
          title="Go to Next Screen"
          onPress={() =>
          navigation.navigate('ProfileScreen',{id:'hef34231'})
        }
        /> */}
      
      {/* <Button
          title="Go to Setting Screen"
          onPress={() =>
          navigation.navigate('Settings', { name: 'Akhzar' })
        }
        /> */}

        {/* <Button
          title="Go to Chatting Screen"
          onPress={() =>
          navigation.navigate('Chatting',{id:'bcs1920cs'})
        }
        /> */}

      <Button
          title="Go to Next Functional Component"
          onPress={() =>
            navigation.navigate('HomeForFunctional')
          }
        />

      <Button
          title="Go to Next Class Component"
          onPress={() =>
            navigation.navigate('HomeForClass')
          }
        />

      <Button
          title="Create USer"
          onPress={createUser}
        />
     
     <Button
          title="Firebase Sign In"
          onPress={loginUser}
        />
     
     <Button
          title="Test Crud"
          onPress={() =>
            navigation.navigate('crud')
          }
        />

    <Button
          title="Log Out User"
          onPress={logoutUser}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});







// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// // import ProfileScreen from './ProfileScreen';
// import Top from './Top';
// import Center from './Center';
// import Bottom from './Bottom';
// import React, { Component, useEffect, useState } from 'react';

// var flag = 12;

// export default class Home extends Component {

//   constructor(props){
//     super(props)
//     this.state={
//       count: 0
//     }
//   }

//   static getDerivedStateFromProps(){
//     console.log('getDerivedStateFromProps')
//   }

//   componentDidMount(){
//     console.log('didMount')
//   }

//   getSnapshotBeforeUpdate(){
//     console.log('getSnapshotBeforeUpdate')
//     return null;
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate')
//   }

//   shouldComponentUpdate(){
//     return true
//   }

// //   static getDerivedStateFromProps()
// // shouldComponentUpdate()
// // render()
// // getSnapshotBeforeUpdate()
// // componentDidUpdate()

// // const [count, setCount] = useState(13);
// // const [number, setNumber] = useState(90);
// // const [state, setState] = useState(
// //   {
// //     name:'',
// //     class:'',
// //   }
// // )

// // useEffect(()=>{
// //     console.log('Home useEffect []')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// //     return()=>{
// //       console.log('Home useEffect return []');
// //     }
// // },[])

// // useEffect(()=>{
// //     console.log('useEffect [count]')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// // },[count])

// // useEffect(()=>{
// //     console.log('useEffect [number]')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// // },[number])


// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect []', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [count]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[count])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [number]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[number])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [props]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[props])

//   // useEffect(()=>{
//   //   flag = 190;
//   //   console.log('useEffect', flag);
//   //   setCount(count+1);
//   // },[props])
  
//   render(){
//   return (
//     <View style={{flex:1, backgroundColor:'black'}}>
//       {console.log('Return')}
      
//       {/* <Top name="Akhzar Nazir" /> */}
//       {/* <Center /> */}
//       {/* <Bottom /> */}

//       <Button
//           title="Go to Next Screen"
//           onPress={() =>
//           this.props.navigation.navigate('ProfileScreen',{id:'hef34231'})
//         }
//         />

//       <Button title='Minus' onPress={()=>this.setState({count:1})} />
      
//       <Button
//           title="Go to Setting Screen"
//           onPress={() =>
//           this.props.navigation.navigate('Settings', { name: 'Akhzar' })
//         }
//         />

//     {/* <Button title='PLUS' onPress={()=>setCount(count+1)} />
      
//     <Button title='Minus' onPress={()=>setCount(count-1)} />
    
//     <Button title='Number' onPress={()=>setNumber(number+1)} /> */}
     
//     </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
