import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
    let task = props.task

    const Buttons = () => {
        return (
            <View style={Styles.ViewButtons}>
                <TouchableOpacity style={Styles.ButtonCheck} activeOpacity={0.5} onPress={(e) =>{
                    props.checkTask(task.descricao)
                }}>
                    <Icon name="check" size={35} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.ButtonDelete} activeOpacity={0.5} onPress={() => props.removeTask(task.descricao)}>
                    <Icon name="close" size={35} color='white' />
                </TouchableOpacity>
            </View>
        )
    }

    const renderList = () => {
        return (
            <Swipeable renderLeftActions={Buttons}>
                <View style={Styles.Task} key={task.titulo}>
                    {
                        task.status==true ? <View style={Styles.IconChecked}><Icon name="check" size={35} color="green" /></View> : null
                    }
                    <Text style={Styles.TittleTask}>{task.titulo}</Text>
                    <Text style={Styles.DescriptionTask}>{task.descricao}</Text>
                    {
                        task.horario ?
                            <Text style={Styles.AlertTask}><Icon name="warning" size={18} /> {task.horario}</Text> :
                            <Text style={Styles.AlertTask}>SEM AVISOS</Text>
                    }
                </View>
            </Swipeable>
        )
    }

    return renderList()
}