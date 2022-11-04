import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import firestore from "firebase/firestore";
import {doc, setDoc,updateDoc} from 'firebase/firestore'
import {db,auth} from './Home';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";


  export default function RegistrationScreen({navigation}){
    const [name, setName] = useState("");
    const [registeration, setRegisteration] = useState("");
    const [age, setAge] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");
    const [semester, setSemester] = useState("");

    function addStudent(){
       setDoc(doc(db, "Student",registeration), {
        Name: name,
        RegistrationNumber: registeration,
        Age: age,
        University: university,
        Degree: degree,
        Semester: semester
      }).then(()=>{
        console.log('user added')
      })
    }  
    function updateStudent(){
      //const user = doc(db,'Student',registeration)
      updateDoc(doc(db,'Student',registeration),
        // db
        // .collection('Student')
        // .doc(registeration)
        // .update(
          {
          Name: name,
          RegistrationNumber: registeration,
          Age: age,
          University: university,
          Degree: degree,
          Semester: semester
        })
        .then(() => {
          console.log('User updated!');
        });
    }  


  return (  
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex: 1}}>
        <View style={{flex: 0.1,alignItems: 'center'}}>
          <Text style={{fontSize: 22,color: 'darkslateblue',textAlign: 'center',marginBottom: 5,marginTop: 10}}>Welcome to Student Registration</Text>
        </View>
        <View style={{flex: 0.7,}}>
          <Text style={styles.HeadingText}>Name</Text>
          <TextInput placeholder="Muhammad Ahmad" 
            onChangeText={(value)=>setName(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Registration Number</Text>
          <TextInput placeholder="FA20-BCS-027"
            onChangeText={(value)=>setRegisteration(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Age</Text>
          <TextInput placeholder="20" 
            onChangeText={(value)=>setAge(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>University</Text>
          <TextInput placeholder="Comsats Lahore"
            onChangeText={(value)=>setUniversity(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Degree</Text>
          <TextInput placeholder="BCS"
            onChangeText={(value)=>setDegree(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Semester</Text>
          <TextInput placeholder="1-8"
            onChangeText={(value)=>setSemester(value)}
            marginBottom={20}
            
            style={styles.TextInput}>
          </TextInput>
          </View>
    
          <View style={{flex: 0.2,flexDirection: 'row'
          ,flexWrap: 'wrap',paddingBottom: 10,justifyContent: 'center'}}>
          <TouchableOpacity style={styles.SaveBtn}
          onPress={()=>{
            addStudent()
            
          }}
          >
            <Text style={{fontSize: 28,color: 'white',fontWeight: '700'}}>Register Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SaveBtn}
          onPress={()=>{updateStudent()}}
          >
            <Text style={{fontSize: 28,color: 'white',fontWeight: '700',textAlign: 'center'}}>Update Student</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{marginRight: -220,width: 230}}
          onPress={()=>{navigation.navigate('DeleteSearch')}}
          >
            <Text style={{fontSize: 20,color: 'darkslateblue',fontWeight: '700',textAlign: 'center',}}>Other Options</Text>
          </TouchableOpacity>

          </View>
        
      </View>
    </ScrollView>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  TextInput: {
    height: 50,
    width: '90%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 18,
    fontSize: 18
  },
 
  SaveBtn: {
    width: '90%',
    borderRadius: 10,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginHorizontal: 18,
    marginBottom: 5,
    backgroundColor: "darkslateblue",
  },
  
  HeadingText:{
    color:"black",
    fontWeight:"700",
    fontSize:20,
    marginBottom: 3,
    marginLeft: 25,
    marginTop: 3
  },

});
