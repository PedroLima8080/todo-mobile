import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    ButtonSubmit:{
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonSave:{
        backgroundColor: '#51b067',
    },
    ButtonCancel:{
        backgroundColor: '#f25f4b',
    },
    ButtonIcon: {
        color: '#e8e8e8'
    },
    ButtonText: {
        color: '#e8e8e8',
        fontSize: 18
    }
})

export default styles