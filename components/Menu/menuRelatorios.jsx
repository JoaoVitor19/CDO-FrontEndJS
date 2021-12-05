import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#107F72",
        fontWeight: 'bold'
   },

   image:{
       width: 30,
       height: 30
   }
})

function Menu(){
    return(
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/menu.png')} />
        <Text style={{ color: 'white', marginLeft:100, fontSize: 23 }}>Relatórios</Text>
    </View>
    );
}

export default Menu;
