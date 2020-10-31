import React from 'react'
import { View, Text } from 'react-native'

import IconPage from '../../components/IconPage/index'
import { useNavigation } from '@react-navigation/native'

export default () => {

    const navigation = useNavigation()

    return (
        <View style={{flex: 1}}>
            <Text>
                Tasks
            </Text>

            <IconPage name="home" size={18} orientation="right" onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}