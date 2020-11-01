import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import Field from '../Field/index'
import styles from './styles'
import ButtonSubmit from '../ButtonSubmit/index'

export default () => {
    const navigation = useNavigation()

    const [checked, setChecked] = useState(false);
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [horario, setHorario] = useState('')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function getTasks() {
            let tasksStorage = await AsyncStorage.getItem('Tasks')
            if (tasksStorage == null){
                setTasks([])
            }
            else{
                setTasks(JSON.parse(tasksStorage))
            }

            }
            getTasks()
        }, [])

    //salva task
    const saveTask = async () => {
        let task
        if (checked) {
            task = {
                titulo,
                descricao,
                horario
            }
        } else {
            task = {
                titulo,
                descricao
            }
        }

        let allTasks = [...tasks, task]

        await AsyncStorage.removeItem('Tasks')
        await AsyncStorage.setItem('Tasks', JSON.stringify(allTasks))

        console.log(JSON.stringify(allTasks))
    }

    //cancela criação
    const cancelTask = () => {
        console.log(tasks)
/*
        setTitulo('')
        setDescricao('')
        setChecked(false)
        setHorario('')
        navigation.navigate('Home')*/
    }

    return (
        <View style={{
            padding: 10,
        }}>
            <Field tittle="TITULO DA TAREFA" placeholder="Adicione um título" icon="flag-o" type="text" valueText={titulo} setValue={setTitulo} />
            <Field tittle="DESCRIÇÃO" placeholder="Adicione uma descrição" icon="file-text-o" type="text" valueText={descricao} setValue={setDescricao} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
                <Checkbox
                    color="green"
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text>Deseja ser avisado?</Text>
            </View>
            {
                checked ? <Field tittle="HORÁRIO DO ALERTA" icon="clock-o" type="time" setValue={setHorario} /> : <Text></Text>
            }
            <View style={styles.ViewButtons}>
                <ButtonSubmit type='cancel' text="Cancelar" icon="close" clickAction={cancelTask} />
                <ButtonSubmit type='save' text="Salvar" icon="check-circle" clickAction={saveTask} />
            </View>
        </View>
    )
}