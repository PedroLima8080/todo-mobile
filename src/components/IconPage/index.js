import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default (props) => {
    return (
        <Icon name={props.name} size={props.size} 
        style={
            props.orientation == "left" ? [styles.IconLeft, styles.Icon] : [styles.IconRight, styles.Icon]
        }
            onPress={() => props.onPress()}
        />
    )
}

const styles = StyleSheet.create({
    IconLeft: {
        position: "absolute",
        bottom: 10,
        left: 10,
    },
    IconRight: {
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    Icon: {
        backgroundColor: "#42e398",
        textAlign: 'center',
        lineHeight: 45,
        width: 45,
        height: 45,
        borderRadius: 50,
        color: '#4c4c4c'
    }
})