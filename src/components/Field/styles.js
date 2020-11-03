import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    FullField: {
        marginVertical: 7,
    },
    SpanField: {
        color: '#34eb98',
        fontWeight: 'bold',
        fontSize: 16
    },
    Field: {
        height: 40,
        marginTop: 5,
        alignItems: 'center',
        borderColor: '#3a3a3a',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10
    },
    FieldIcon: {
        fontSize: 25,
    },
    FieldText: {
        paddingLeft: 10,
        paddingRight: 15,
        height: 40,
        flex: 1,
        lineHeight: 40,
    }
})

export default styles