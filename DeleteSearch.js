import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { onSnapshot, QuerySnapshot,document, Firestore,  } from "firebase/firestore";
import {doc,deleteDoc,getDoc,} from 'firebase/firestore'
//import { firestore } from "@react-native-firebase/firestore";
//import {db} from './config';
import {db, auth} from './Home'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
  } from "react-native";

  export default function DeleteSearch({navigation}){

    const [registeration,setRegisteration] = useState('');
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");
    const [semester, setSemester] = useState("");

    const [shouldShow,setShouldShow] = useState(false);

    //const docRef = doc(db,'Student',registeration);
    //const docsnap = getDoc(docRef);


    function searchStudent(){
    //     getDoc(docRef)
    //     .then((doc)=>{
    //         console.log(doc.data(),doc.registeration);
    //         console.log(2)
    // })
            
    const docRef = doc(db,'Student',registeration);
        onSnapshot(docRef, (doc)=>{
            console.log(doc.data())
            setName(doc.data()['Name'])
            setRegisteration(doc.data()['RegistrationNumber'])
            setAge(doc.data()['Age'])
            setDegree(doc.data()['Degree'])
            setUniversity(doc.data()['University'])
            setSemester(doc.data()['Semester'])
        }
        )

        
    }
    function deleteStudent(){
        if(deleteDoc(doc(db,'Student',registeration))){
            Alert.alert('Delete Student','Student deleted successfully!');
            console.log('User deleted!');
        }
    }

    return(
        <ScrollView style={styles.container}>
        <View style={{flex: 1,}}>
            <View style={{flex: 0.3,borderBottomColor: 'darkslateblue',borderBottomWidth: 1}}>
                <View style={{}}>
                <TextInput
                    placeholder="Enter Registration number"
                    onChangeText={(value)=>setRegisteration(value)}
                    style={{backgroundColor: 'white',marginHorizontal: 16,marginTop: 20,marginBottom: 15,height: 60,fontSize: 24,fontWeight: '700',paddingLeft: 10,borderRadius: 5}}
                ></TextInput>
                </View>
                <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent:'center'}}>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        searchStudent()
                        setShouldShow(!shouldShow);
                    }}
                >
                    <Text style={styles.text}>Search Student</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{deleteStudent()}}
                >
                    <Text style={styles.text}>Delete Student</Text>
                </TouchableOpacity>
                </View>
            </View>
            {shouldShow?(
                <View style={{flex: 0.7,paddingBottom: 10}}>
                    <Text style={{color: 'darkslateblue',fontSize: 30,textAlign: 'center',fontWeight: 'bold',marginTop: 10,marginBottom: 5}}>Student Information</Text>
                    <View style={styles.result}><Text style={styles.info}>Registration Number</Text>
                    <Text style={styles.show}>{registeration}</Text></View>
                    <View style={styles.result}><Text style={styles.info}>Name: </Text>
                    <Text style={styles.show}>{name}</Text></View>
                    <View style={styles.result}><Text style={styles.info}>Age: </Text>
                    <Text style={styles.show}>{age}</Text></View>
                    <View style={styles.result}><Text style={styles.info}>University: </Text>
                    <Text style={styles.show}>{university}</Text></View>
                    <View style={styles.result}><Text style={styles.info}>Degree: </Text>
                    <Text style={styles.show}>{degree}</Text></View>
                    <View style={styles.result}><Text style={styles.info}>Semester: </Text>
                    <Text style={styles.show}>{semester}</Text></View>
                </View>
            ):null}
        </View>
        </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    button: {
        width: 180,
        height: 60,
        backgroundColor: 'darkslateblue',
        marginHorizontal: 10,
        marginBottom: 15
    },
    text:{
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 15
    },
    info:{
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 10,
        color: 'darkslateblue',
        
    },
    show:{
        backgroundColor: 'white',
        width: 330,
        height: 47,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '100',
        marginVertical: 2,
        borderRadius: 8,
        marginHorizontal: 40,
        paddingTop: 7,
        color: 'grey'
    },
    result:{
        flex: 0.1,
       
    }
  });