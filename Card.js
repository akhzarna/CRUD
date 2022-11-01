import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Card({ student, deleteHandler, card, }) {
    return (


        <View style={styles.card}>
            <View>
                <Text style={styles.nameStyle}>{student.name}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                console.log("preesessd")
                deleteHandler(student.id)

            }}>
                <MaterialCommunityIcons name="delete-circle" size={30} color="#6F6AE6" />
            </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={() => {

            }}>
                <MaterialCommunityIcons name="account-edit" size={30} color="#6F6AE6" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: 24,
        marginVertical: 16,
        borderRadius: 28,

    },
    nameStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#464646',
    },
})