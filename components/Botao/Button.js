import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const Button = ({labelButton, onPress}) => {

    return(
        <TouchableOpacity
        style={styles.button}
        onPress={onPress} 
        >
            
            <Text style={styles.texto}>
                {labelButton}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#FB0000',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft:100,
        paddingRight: 100,
        borderRadius: 18,
        marginTop: 20

    },

    texto:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default Button