import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#eee',
    },
    contentIconClose: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
    iconClose: {
        fontSize: 25,
        color: '#616161',
        backgroundColor: '#ddd',
        width: 40,
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#616161"
    }
})

export default styles