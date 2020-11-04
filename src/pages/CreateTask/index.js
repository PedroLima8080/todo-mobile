import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Form from '../../components/FormCreateTask/index'
import IconPage from '../../components/IconPage/index'
import Header from '../../components/Header/index'

export default () => {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <Header title="CreateTask" fontSize={50} textAlign="center"/>
            <Form />
            <IconPage name="home" size={18} orientation="left" onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}