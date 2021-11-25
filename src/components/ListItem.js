import React from 'react'

import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'



const ListItem = ({ onPress, desc, completed }) => {
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            {
                completed
                ?
                <Text style={[styles.text, styles.strike]}>{desc}</Text>
                :
                <Text style={styles.text}>{desc}</Text>
            }
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        marginTop: 35,
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text:{
        fontSize: 18
    },
    strike:{
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
})