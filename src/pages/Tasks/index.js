import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import IconPage from '../../components/IconPage/index'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import List from '../../components/TasksList/index'

export default () => {
    const [tasks, setTasks] = useState(null)

    const navigation = useNavigation()

    useEffect(() => {
        async function getTasks() {
            let asyncTasks = await AsyncStorage.getItem('Tasks')
            setTasks(JSON.parse(asyncTasks))
        }
        getTasks()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <List tasks={tasks}/>
            <IconPage name="home" size={18} orientation="right" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}