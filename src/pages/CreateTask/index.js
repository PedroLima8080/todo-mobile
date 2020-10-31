import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'

import IconPage from '../../components/IconPage/index'

export default () => {

    const navigation = useNavigation()

    return (
        <View style={{flex: 1}}>
            <Text>
                Criando task
            </Text>

            <IconPage name="home" size={18} orientation="left" onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}