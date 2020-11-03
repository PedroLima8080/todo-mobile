import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import IconPage from '../../components/IconPage/index'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Task from '../../components/Task/index'
import styles from './styles'

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

    const refreshStorage = async (newTasks) => {
        if (newTasks == null) {
            await AsyncStorage.removeItem('Tasks')
        } else {
            await AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        }
    }

    const removeTask = (identifier) => {
        let oldTasks = tasks
        let newTasks = tasks.filter((task) => task.descricao !== identifier)

        if (newTasks.length == 0) {
            setTasks(null)
            refreshStorage(null)
        } else {
            setTasks(newTasks)
            refreshStorage(newTasks)
        }
    }

    const checkTask = (identifier) => {
        let oldTasks = tasks
        let editedTask = tasks.filter((task) => task.descricao === identifier)
        editedTask[0].status = true

        let newTasks = tasks.filter((task) => task.descricao !== identifier)
        newTasks.push(editedTask[0])

        setTasks(newTasks)
        refreshStorage(newTasks)
    }

    return (
        <View style={{ flex: 1 }}>
            {
                tasks === null ? <View><Text style={styles.Alert}>Você não possui nenhuma tarefa</Text></View> :
                    tasks.map(task => <View key={task.titulo}><Task task={task} checkTask={checkTask} removeTask={removeTask} /></View>)
            }
            <IconPage name="home" size={18} orientation="right" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}