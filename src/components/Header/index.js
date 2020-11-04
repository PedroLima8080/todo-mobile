import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default (props) => {
    return(
        <View style={styles.ContentHeader}>
            <Text style={[styles.TitleHeader, {fontSize: props.fontSize, textAlign: props.textAlign}]}>{props.title}</Text>
        </View>
    )
}