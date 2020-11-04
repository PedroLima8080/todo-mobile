import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import IconPage from '../../components/IconPage/index'
import Task from '../../components/Task/index'
import styles from './styles'
import Header from '../../components/Header/index'
import Modal from '../../components/modalTask/index'

export default () => {
    const [tasks, setTasks] = useState(null)
    const [currentTask, setCurrentTask] = useState()
    const [loading, setLoading] = useState(true)
    const [qntTasks, setQntTasks] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        async function getTasks() {
            let asyncTasks = JSON.parse(await AsyncStorage.getItem('Tasks'))
            setTasks(asyncTasks)
            setLoading(false)
        }
        getTasks()
    }, [])

    useEffect(() => {
        refreshQntTasks()
    }, [tasks])

    const refreshQntTasks = () => {
        if (tasks == null) {
            setQntTasks(0)
        } else {
            let tasksChecked = tasks.filter((task) => task.status != true)
            setQntTasks(tasksChecked.length)
        }
    }

    const refreshStorage = async (newTasks) => {
        if (newTasks == null) {
            await AsyncStorage.removeItem('Tasks')
        } else {
            await AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
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
                <View style={{ flex: 1 }}>
                    <Header title="YourTasks" fontSize={50} textAlign="center"/>
                    <View style={{ padding: 12 }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={styles.SpanTopic}>DADOS</Text>
                            <View>
                                {qntTasks > 0 ? <Text style={{ color: '#616161' }}>Tarefas restantes: {qntTasks}</Text> : <Text style={{ color: '#616161' }}>Sem tarefas restantes!</Text>}
                            </View>
                        </View>
                        <View>
                            <Text style={styles.SpanTopic}>SUAS TAREFAS</Text>
                            {
                                tasks === null ? <View><Text style={styles.Alert}>Você não possui nenhuma tarefa</Text></View> :
                                    tasks.map(task =>
                                        <View key={task.descricao}>
                                            <Task task={task} checkTask={checkTask} removeTask={removeTask} setCurrentTask={setCurrentTask} setIsVisible={setIsVisible} />
                                        </View>
                                    )
                            }
                        </View>
                    </View>
                    <IconPage name="home" size={18} orientation="right" onPress={() => navigation.navigate("Home")} />
                </View>

                {
                    isVisible ? <Modal isVisible={isVisible} task={currentTask} setIsVisible={setIsVisible} /> : null
                }
            </View>
        )
    }
}