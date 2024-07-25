import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type HeaderProps = {
    icon:string,
    title:string
}

const HeaderTitle =({icon, title}:HeaderProps)=> {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={30} color={'#900'}/>
            <Text style={styles.txtTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'gray'
    },
    txtTitle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        alignSelf: 'center',
        color: '#fff'
    }
})

export default HeaderTitle;