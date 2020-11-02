import React from 'react'
import { View, Text } from 'react-native'

import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
    let tasks = props.tasks

    const renderList = () => {
        if (tasks === null) {
            return (
                <View>
                    <Text style={Styles.Alert}>Você não possui nenhuma tarefa</Text>
                </View>
            )
        } else {
            return tasks.map(task => (

                    <View key={task.titulo} style={Styles.Task}>
                        <Text style={Styles.TittleTask}>{task.titulo}</Text>
                        <Text style={Styles.DescriptionTask}>{task.descricao}</Text>
                        {
                            task.horario ?
                                <Text style={Styles.AlertTask}><Icon name="warning" size={18} /> {task.horario}</Text> :
                                <Text style={Styles.AlertTask}>SEM AVISOS</Text>
                        }
                    </View>
            ))
        }
    }

    return renderList()
}