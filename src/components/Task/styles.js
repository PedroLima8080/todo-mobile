import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    
    Task: {
        backgroundColor: '#ffffff',
        marginBottom: 3,
        marginTop: 3,
        borderRadius: 8,
    },
    TittleTask: {
        color: '#616161',
        fontSize: 22,
        marginLeft: 8,
        letterSpacing: 1.2,
        flex: 1
    },
    Checked: {
        textDecorationLine: 'line-through'
    },
    ViewButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 50
    },
    ColorRemove:{
        color: '#616161',
    },
    IconTask: {
        fontSize:30,
        marginRight: 5,
    },
    TextRemove: {
        fontSize: 18,
        letterSpacing: 1.1
    },
    BtnRemove: {
        marginLeft: 'auto',
        borderColor: 'gray',
        borderWidth: 1,
        color: 'black',
        paddingVertical: 2.5,
        paddingHorizontal: 8,
        fontSize: 18,
        borderRadius: 8
    }
})

export default styles