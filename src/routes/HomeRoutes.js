import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/index'
import Tasks from '../pages/Tasks/index'
import CreateTask from '../pages/CreateTask/index'

export default () => {

    const stack = createStackNavigator()

    return (
        <stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown:false,
        }}>
            <stack.Screen component={Home} name="Home"/>
            <stack.Screen component={Tasks} name="Tasks"/>
            <stack.Screen component={CreateTask} name="CreateTask" options={{
                headerShown: true,
                title: 'CRIAR TAREFA',
                headerTitleStyle: { 
                    alignSelf: 'center' 
                },
                headerLeft: null,
                
            }}/>
        </stack.Navigator>
    )
}