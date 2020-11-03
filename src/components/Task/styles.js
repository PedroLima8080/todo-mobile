import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    ButtonCheck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#46d470'
    },
    ButtonDelete: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cc3f54'
    },
    ViewButtons: {
        flexDirection: 'column',
        width: 50,
        backgroundColor: '#ffffff'
    },
    Task: {
        height: 100,
        padding: 10,
        backgroundColor: '#ffffff'
    },
    TaskChecked: {
        backgroundColor: 'green'
    }, 
    TittleTask: {
        color: '#34eb98',
        fontSize: 19,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 1.2
    },
    DescriptionTask: {
        marginVertical: 8
    },
    AlertTask: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    IconChecked: {
        position: 'absolute',
        top: 2,
        right: 2
    }

    //#34eb98
})

export default styles