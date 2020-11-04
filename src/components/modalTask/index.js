import React from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'
import Header from '../Header/index'

export default (props) => {
    let { isVisible, setIsVisible, task } = props
    return (
        <Modal
            visible={isVisible}
            animationType='slide'
            style={{ flex: 1 }}
        >
            <View style={styles.modal}>
                <Header title={task.titulo} fontSize={35} textAlign="left"/>
                <TouchableOpacity style={styles.contentIconClose} onPress={()=>setIsVisible(false)}><Icon style={styles.iconClose} name="close"/></TouchableOpacity>
                <View style={{padding: 12}}>
                    <Text>{task.descricao}</Text>
                </View>
            </View>
        </Modal>
    )
}