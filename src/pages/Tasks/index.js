import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import IconPage from '../../components/IconPage/index'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Task from '../../components/Task/index'
import styles from './styles'

export default () => {
    const [tasks, setTasks] = useState(null)
    const [loading, setLoading] = useState(true)
    const [qntTasks, setQntTasks] = useState()

    const navigation = useNavigation()

    useEffect(() => {
        async function getTasks() {
            let asyncTasks = await AsyncStorage.getItem('Tasks')
            setTasks(JSON.parse(asyncTasks))
            setLoading(false)
            refreshQntTasks()
        }
        getTasks()
    }, [])

    const refreshQntTasks = async () => {
        let asyncTasks = await AsyncStorage.getItem('Tasks')
        if(asyncTasks==null){
            setQntTasks(0)
        }else{
            let tasksChecked = JSON.parse(asyncTasks).filter((task)=>task.status!=true)
            setQntTasks(tasksChecked.length)
        }
    }

    const refreshStorage = async (newTasks) => {
        if (newTasks == null) {
            await AsyncStorage.removeItem('Tasks')
            refreshQntTasks()
        } else {
            await AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
            refreshQntTasks()
        }
    }

    const removeTask = (identifier) => {
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
        let editedTask = tasks.filter((task) => task.descricao === identifier)
        editedTask[0].status = !editedTask[0].status

        let newTasks = tasks.filter((task) => task.descricao !== identifier)
        newTasks.push(editedTask[0])

        setTasks(newTasks)
        refreshStorage(newTasks)
    }

    if (loading) {
        return <ActivityIndicator size="large" color="#616161" style={{ marginTop: 50 }} />
    } else {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.SpanTopic}>Dados</Text>
                        <View>
                            {qntTasks > 0 ? <Text>Tarefas restantes: {qntTasks}</Text> : <Text>Sem tarefas restantes!</Text>}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.SpanTopic}>SUAS TAREFAS</Text>
                        {
                            tasks === null ? <View><Text style={styles.Alert}>Você não possui nenhuma tarefa</Text></View> :
                                tasks.map(task => <View key={task.descricao}><Task task={task} checkTask={checkTask} removeTask={removeTask} /></View>)
                        }
                    </View>
                </View>
                <IconPage name="home" size={18} orientation="right" onPress={() => navigation.navigate("Home")} />
            </View>
        )
    }

}