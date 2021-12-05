import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {View, Text, StyleSheet, Image, Linking, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    pngOleo: {
        width: 100,
        height: 100,
        marginTop: 25
    },



})

export default function Servico (){

return(
    <LinearGradient
    colors={['#70F6C6', '#227878', '#227878']}
    style={styles.background}>
    <View style={styles.background}>
    <Text style={styles.textStyle}>
           Clique no botão
       </Text>
       <Text style={styles.textStyle}>
           e entre em contato com a gente 
       </Text>
       <Text style={styles.textStyle} >
           para agendar seu serviço!
           
       </Text>
       <TouchableHighlight 
        onPress={() => Linking.openURL('https://google.com')}>
       <Image source={require('../../assets/images/whats.png')} style={styles.pngOleo}  />
       </TouchableHighlight>
    </View>
</LinearGradient>

)

}