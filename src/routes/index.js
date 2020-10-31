import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/HomeSwiper/index'

export default () => {
    const stack = createStackNavigator()

    return (
        <stack.Navigator initialRouteName="home" screenOptions={{
            headerShown: false
        }}>
            <stack.Screen component={Home} name="home"/>
        </stack.Navigator>
    )
}