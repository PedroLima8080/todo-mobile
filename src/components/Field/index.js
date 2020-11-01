import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles'

export default (props) => {
    if (props.type === "text") {
        return (
            <View style={styles.FullField}>
                <Text style={styles.SpanField}>{props.tittle}</Text>
                <View style={styles.Field}>
                    <Icon name={props.icon} size={18} style={styles.FieldIcon} />
                    <TextInput placeholder={props.placeholder} style={styles.FieldText}
                        value={props.valueText}
                        onChangeText={(t) => {
                            props.setValue(t)
                        }} />
                </View>
            </View>
        )
    }
    else if (props.type === "time") {
        const [date, setDate] = useState(new Date(1598051730000));
        const [mode, setMode] = useState('time');
        const [show, setShow] = useState(false);

        useEffect(() => {
            props.setValue(`${date.getHours()}:${date.getMinutes()}`)
        }, [date])

        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
        };

        const showMode = (currentMode) => {
            setShow(true);
            setMode(currentMode);
        };

        const showDatepicker = () => {
            showMode('date');
        };

        const showTimepicker = () => {
            showMode('time');
        };

        return (
            <View style={styles.FullField}>
                <Text style={styles.SpanField}>{props.tittle}</Text>
                <View style={styles.Field}>
                    <Icon name={props.icon} size={18} style={styles.FieldIcon} />
                    <Text
                        onPress={() => {
                            setShow(true)
                        }}
                        style={styles.FieldText}
                    >
                        {`${date.getHours()}:${date.getMinutes()}`}
                    </Text>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        )
    }
}