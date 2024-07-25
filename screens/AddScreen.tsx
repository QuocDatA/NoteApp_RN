import React from "react";
import HeaderTitle from "./components/Header";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddScreen = ()=> {
    return (
        <>
            <HeaderTitle icon='close' title='New' />
            <View style={{padding: 30}}>
                <View>
                    <TextInput placeholder={'Title'} style={styles.title_input}/>
                </View>
                <View style={styles.content_title}>
                    <TextInput placeholder={'Content'} multiline={true}/>
                </View>
                <TouchableOpacity style={styles.btn_save}>
                    <Text style={styles.txt_save}>Save</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title_input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
    },
    content_title: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginTop: 30,
        height: 400
    },
    btn_save: {
        width: '100%',
        backgroundColor: 'red',
        padding: 15,
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    txt_save: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default AddScreen;