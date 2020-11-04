import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style'

export default (props) => {
    return (
        <TouchableOpacity
            style={
                props.type === 'save' ? [styles.ButtonSubmit, styles.ButtonSave] : [styles.ButtonSubmit, styles.ButtonCancel]
            }
            onPress={()=>props.clickAction()}
            activeOpacity={0.5}
        >
            <Icon name={props.icon} size={18} style={styles.ButtonIcon} />
            <Text style={styles.ButtonText}> {props.text}</Text>
        </TouchableOpacity>
    )
}