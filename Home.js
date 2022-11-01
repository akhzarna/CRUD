
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button , FlatList} from 'react-native';
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

  apiKey: "AIzaSyBaKwlkrHbUuGXsF_q1Lb4Al_tdxskYc9c",

  authDomain: "testt-dd1f2.firebaseapp.com",

  databaseURL: "https://testt-dd1f2-default-rtdb.firebaseio.com",

  projectId: "testt-dd1f2",

  storageBucket: "testt-dd1f2.appspot.com",

  messagingSenderId: "182382313651",

  appId: "1:182382313651:web:4a6eedf4b857147f29f0c6"

};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
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

const Deleted = () => {
   
  db.collection('Users')
  .doc('ABC')
  .delete()
  .then(() => {
    console.log('User deleted!');
  })
  }
  
  const abc = async () => {
  
  db.collection("student")
   .orderBy('rollno', 'asc')
   .get()
      .then((querySnapshot) => {
        let myData = [];
       // console.log("Total users: ", querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          const playerObject = documentSnapshot.data();
          myData.push({
            name: playerObject.name,
            rollno: playerObject.rollno,
          });

      //    console.log(
          //  "User ID=: ",
         //   documentSnapshot.id,
        //    documentSnapshot.data()
       //   );
          
          });
          setData(myData);
        });

      }
      
     
    abc();
      

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
  

 

 

  useEffect(() => {
    // console.log('navigation useEffect is =')
    const unsubscribe = navigation.addListener('focus', () => {
   //   setFonts(global.setting.fs)
      
      console.log('navigation useEffect is Called=', global.setting)

    });
    return unsubscribe;
  }, [navigation]);


  const [names, onChangeText] = React.useState(null);
  const [roll, onChangeNumber] = React.useState(null);

  const [nnames, onChangeText1] = React.useState(null);
  const [nroll, onChangeNumber2] = React.useState(null);

  const xyz = () => {

  if(nnames!=names && nnames !== null )

  {

    db.collection('student')
    .doc(names)
    .delete()

  {
    db.collection('student')
   
    .doc(nnames)
   .set({
    name: nnames,
    rollno: nroll,
   })
   .then(() => {
     console.log('User updated!');
   }) 
  }
  }

  else

  {
  db.collection('student')
  .doc(names)
 .update({
  rollno: nroll,
 })
 .then(() => {
   console.log('User updated!');
 }) 
}
  
}

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      
      {
        // console.log('User data: ', data)
      }

      
      {/* <Button
          title="Go to Setting Screen"
          onPress={() =>
          navigation.navigate('Settings', { name: 'Akhzar' })
        }
        /> */}

      

<View style={{ flex: 1, backgroundColor: "green" }}>
        
        <View>

        <TextInput
        style={{backgroundColor:'white',  margin:12}}
        onChangeText={onChangeText}
        placeholder="Enter Student Name"
        placeholderTextColor={"grey"}
        value={names}
      />
     
     <TextInput
        style={{backgroundColor:'white',  margin:12}}
        onChangeText={onChangeNumber}
        value={roll}
        placeholder="Enter Roll Number"
        placeholderTextColor={"grey"}
        keyboardType="numeric"
      />
      

<Button 
          title="Create Record"
          onPress={ async () =>
            db.collection('student')
            .doc(names)
            .set({
              rollno: roll ,
             name: names ,
            })
            .then(() => {
              console.log('User added!');
            })   
        }
        />

<TextInput  
        style={{backgroundColor:'white',  margin:12}}
        onChangeText={onChangeText}
        placeholder="Delete Record By Student Name"
        placeholderTextColor={"grey"}
        value={names}
      />

<Button
          title="Delete"
          color="red"
          width = '80'

          
          onPress={ async () =>
            db.collection('student')
            .doc(names)
            .delete()
            .then(() => {
              console.log('User deleted!');
            })
        }
        />

<TextInput  
        style={{backgroundColor:'white',  margin:6}}
        onChangeText={onChangeText}
        placeholder="Which Student? Enter Name"
        placeholderTextColor={"grey"}
        value={names}
      />

<TextInput  
        style={{backgroundColor:'white',  margin:6}}
        onChangeText={onChangeText1}
        placeholder="Enter Updated Name Or Leave Empty If None"
        value={nnames}
        placeholderTextColor={"grey"}
      />

<TextInput  
        style={{backgroundColor:'white',  margin:6}}
        onChangeText={onChangeNumber2}
        placeholder="Enter Updated Roll Number"
        placeholderTextColor={"grey"}
        keyboardType="numeric"
        value={nroll}
      />



<Button
          title="Update"
          color="grey"
          margin= '4'
          onPress={xyz}
  
        />


<Text style={{backgroundColor:'yellow', padding:6, margin:2, justifyContent:'center', alignSelf:'center'}}>Student List:</Text>

        </View>
        
        <FlatList
          data={data}
          renderItem=  {({ item })   => (
            <View>
              <Text style={{ backgroundColor: "pink" }}>
                Name:  {item.name}    
              </Text>

              
              <Text style={{ backgroundColor: "orange", marginBottom:5 }}>
                Rollno:  {item.rollno}    

              </Text>
              
       
              
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
