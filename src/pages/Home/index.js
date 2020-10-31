import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import IconPage from '../../components/IconPage/index'

export default (props) => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Centro}>
                <Image source={require('../../../assets/logo.png')} style={styles.ImageLogo} />
                <Text style={styles.Tittle}>YouTasks!</Text>
            </View>

            <IconPage name="tasks" size={18} orientation="left" onPress={()=>navigation.navigate("Tasks")}/>
            <IconPage name="plus" size={18} orientation="right" onPress={()=>navigation.navigate("CreateTask")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Centro: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ImageLogo: {
        height: 140,
        width: 140
    },
    Tittle: {
        color: "#42e398",
        fontSize: 27,
        fontWeight: "bold",
    }
})