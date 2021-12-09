import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Menu(props) {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/menu.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text
                        style={styles.headerText}>
                        {props.title}
                    </Text>
                </View>
                <View style={{width:30,height:30}}> 
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        backgroundColor: '#107F72',
        height: 72,
        justifyContent: 'space-around'
    },
    image: {
        width: 30,
        height: 30,
    },
    headerText: {
        width: '100%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    }
})

export default Menu;