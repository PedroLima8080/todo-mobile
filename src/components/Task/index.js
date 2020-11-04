import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RadioButton } from 'react-native-paper';

import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
    let task = props.task

    const Buttons = () => {
        return (
            <View style={Styles.ViewButtons}>
                <Icon name="trash-o" style={[Styles.ColorRemove, Styles.IconTask]} />
                <Text style={[Styles.ColorRemove, Styles.TextRemove]}>Remover tarefa?</Text>
                <TouchableOpacity style={[Styles.ColorRemove, Styles.BtnRemove]} 
                    onPress={() => {
                        props.removeTask(task.descricao)
                    }}
                >
                    <Text>Sim</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderList = () => {
        return (
            <Swipeable renderRightActions={Buttons}>
                <View style={Styles.Task} key={task.titulo}>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start' }}>
                        <RadioButton color="green" status={task.status ? 'checked' : 'unchecked'}
                            onPress={() => {
                                props.checkTask(task.descricao)
                            }} />
                        <Text style={[Styles.TittleTask, task.status ? Styles.Checked : null]} numberOfLines={1}>{task.titulo}</Text>
                    </View>
                </View>
            </Swipeable>
        )
    }
    return renderList()
}