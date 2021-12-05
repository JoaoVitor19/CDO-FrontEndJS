import React, { useState, useEffect } from 'react';
import { Provider } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import ModalVeiculos from '../../components/ModelVeiculos';
import NewVeiculo from '../../components/NewVeiculo';
import { Portal, Modal, Button, IconButton } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        <SafeAreaView>
            <LinearGradient
                colors={['#70F6C6', '#227878', '#227878']}
                style={styles.background}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Provider>
                        <View style={styles.container} >
                            <ModalVeiculos />
                            <Text style={styles.textSub}>Arraste para excluir ou editar.</Text>
                        </View>
                        <View>
                            <NewVeiculo />
                        </View>
                    </Provider>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
}