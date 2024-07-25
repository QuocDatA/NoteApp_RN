import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderTitle from "./components/Header";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({navigation}:any)=> {
    return (
        <>
            <HeaderTitle icon="menu" title="My Note"/>
            <View style={styles.container}>
                <View style={styles.ctnTxt}>
                    <Text style={styles.txtTitle}>Title</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta debitis libero a non similique tempore asperiores</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn_add} onPress={()=>navigation.navigate('Add')}>
                <Icon name="edit" size={40} color={'white'}/>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 30
    },
    ctnTxt: {
        padding: 30,
        backgroundColor: 'pink',
        borderRadius: 10
    },
    txtTitle: {
        fontWeight: 'bold',
        marginBottom: 15
    },
    btn_add: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})

export default HomeScreen