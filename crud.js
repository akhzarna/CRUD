import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { StyleSheet, Text, View , Button, onPress, TextInput} from 'react-native';
import { useState } from 'react';
import {db} from './Home';
export default function App() {


  const [userDoc, setUserDoc] = useState(null)

  const [text, setText] = useState("")
 
    const Create = () =>{
      const myDoc = doc(db, "Crud", "cr")


      const docData = {
        "Name": "sabeeh",
        "class": "BSE",
        "roll": 12
      }
    
      setDoc(myDoc, docData)
        
        .then(() => {

          alert("Document Created!")
        })
        .catch((error) => {

          alert(error.message)
        })
    
    
    }

  const Read = () =>{
    const myDoc = doc(db, "Crud", "cr")

    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserDoc(snapshot.data())
        }
        else {
          alert("No Found")
        }
      })
      .catch((error) => {
        alert(error.message)
      })
    
  }

  const Update = (value, merge) =>{
    const myDoc = doc(db, "Crud", "cr")

    
    setDoc(myDoc, value, { merge: merge })
     
      .then(() => {
   
        alert("Updated")
        setText("")
      })
      .catch((error) => {

        alert(error.message)
      })

 
  }
  const Delete = () =>{
    const myDoc = doc(db, "Crud", "cr")

    deleteDoc(myDoc)
    
      .then(() => {
      
        alert("Deleted")
      })
      .catch((error) => {
        
        alert(error.message)
      })

  }




  return (
    <View style={styles.container}>

      

      
      <TextInput style={{
        width: '50%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 6,
        borderRadius: 30,
        marginVertical: 20,
        backgroundColor:"skyblue",
      }} placeholder='Enter Record' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

      <View style={styles.buttonStyle}>
      <Button color="#00FF00" title='Update'  onPress={() => {
        Update({
          "Name": text
        }, true)
      }} disabled={text == ""}></Button>
      </View>

      <View style={styles.buttonStyle}>
      <Button style={styles.buttonStyle} title="Create" onPress={Create}></Button>
      
      </View>

      <View  style={styles.buttonStyle}>
      <Button color="#00FFFF" title="Read" onPress={Read}></Button>
      </View>

      

     
      {
        userDoc != null &&
        <Text style={{fontSize:50}}>Name: {userDoc.Name},
         class: {userDoc.class}, roll: {userDoc. roll}</Text>
      }



<View style={styles.buttonStyle}>

<Button color="#FF0000" title='Delete' onPress={Delete}></Button>
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
    backgroundColor:"skyblue",
    

  },
  buttonStyle:{
    marginTop:10,
    padding:10,
    width:200,
    backgroundColor:"green",
    
    

  },
  
  
});