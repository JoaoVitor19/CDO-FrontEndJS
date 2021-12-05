import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

function Menu(){
    return(
    <View style={styles.container}>
        <TouchableOpacity><Image style={styles.image} source={require('../../assets/menu.png')}/></TouchableOpacity>
        <Text style={styles.headerText}>Abastecimento</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
         width: '100%',
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         textAlign: 'center',
         fontWeight: 'bold',
         margin: 0,
    },
     
    image:{
        width: 30,
        height: 30
    },
 
    headerText:{
         width: '100%',
         color: 'white',
         textAlign: 'center',
         fontWeight: 'bold',
         fontSize: 30
    }
 })

export default Menu;