import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Card from './Card';
import { onSnapshot, doc, getDocs, setDoc, collection, Firestore } from 'firebase/firestore'




export default function CRUD() {

    const [name, setName] = useState()
    const [students, setstudent] = useState([])





    function addHandler() {

        db.collection('student')
            .add({
                campus: 'Pak Aims lhr',
                rollno: 2,
                name: name,
                class: 'BSE B',
                key: 11
            })
            .then(() => {
                console.log('User added!');
            });
    }

    useEffect(() => {
        let unsub;
        const fetchCards = async () => {
            unsub = onSnapshot(collection(db, 'student'), snapshot => {
                setstudent(snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })))

            })
        }
        fetchCards();
        return unsub;


    }, [])



    function deletehandlerF(id) {
        db.collection('student').doc(id)
            .delete()
            .then(() => {
                console.log('User updated!');
            });
    }



    return (
        <>
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput placeholder='Enter Data'
                        onChangeText={(text) => {
                            setName(text)
                        }}
                    />
                </View>
                <Button title='Add Data' onPress={addHandler} />
            </View>
            <FlatList
                data={students}
                renderItem={({ item }) => <Card student={item} deleteHandler={deletehandlerF} />}
            />
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    input: {
        height: 60,
        width: 310,
        backgroundColor: '#FFFF',
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        elevation: 4,
        justifyContent: 'center'
    },

})