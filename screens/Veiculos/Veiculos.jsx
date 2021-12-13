import React, { useState, useEffect } from 'react';
import { Provider } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import ModalVeiculos from '../../components/ModalVeiculos';
import NewVeiculo from '../../components/NewVeiculo';
import { Portal, Modal, Button, IconButton } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    textSub: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 22,
        marginTop: 10
    }
});


export default function Veiculos() {

    return (
        <View >
            <LinearGradient
                colors={['#70F6C6', '#227878', '#227878']}
                style={styles.background}>
                <Provider>
                    <View style={styles.container} >
                        <ModalVeiculos />
                    </View>
                </Provider>
            </LinearGradient>
        </View>
    );
}