import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#eee',
    },
    contentIconClose: {
        marginTop: 'auto',
        marginBottom: 14,
        backgroundColor: '#ddd',
        padding: 5,
        alignSelf: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#616161",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    iconClose: {
        fontSize: 25,
        color: '#3c3c3c',
        marginRight: 5
    },
    textClose: {
        fontSize: 20,
        color: '#3c3c3c',
    }
})

export default styles