import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Portal, Modal, Button, IconButton } from 'react-native-paper';


const styles = StyleSheet.create({
    plusButton: {
        backgroundColor: '#ff595e',
    },
    alignButton: {
        position: 'relative',
        left: 290,
        bottom: 30,
        justifyContent: 'flex-end'
    },
    createModal: {
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderColor: 'red',
        height: 450,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 20,
    },
    input: {
        width: 150,
        backgroundColor: '#F3F1F1',
        borderColor: '#F3F1F1',
        borderRadius: 10,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 20
    },
    flexInput: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textModal: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
    editModalButton: {
        width: 125
    },
    textInput: {
        marginLeft: 11,
        fontSize: 18,
        textAlign: 'left'
    }
});

export default function NewVeiculo() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View style={styles.alignButton} >
                <IconButton style={styles.plusButton} icon="plus" size={50} color='white' onPress={() => {
                    setModalVisible(!modalVisible);
                }}>

                </IconButton>
            </View>
                <Portal>
                    <Modal
                        style={styles.createModal}
                        visible={modalVisible}
                        onDismiss={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.flexInput}>
                            <View style={styles.flexInput}>
                                <View>
                                    <Text style={styles.textModal}>Cadastrar Veiculos</Text>
                                </View>
                                <View style={styles.flex}>
                                    <View>
                                        <Text style={styles.textInput}>Marca</Text>
                                        <TextInput
                                            style={styles.input}
                                            maxLength={12}
                                            placeholder="Marca"
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textInput}>Modelo</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Modelo"
                                            maxLength={30}
                                        />
                                    </View>
                                </View>
                                <View style={styles.flex}>
                                    <View>
                                        <Text style={styles.textInput}>Placa</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Placa"
                                            maxLength={7}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.textInput}>Data</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Data"
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.textInput}>Condição</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Condição"
                                        maxLength={10}
                                    />
                                </View>
                            </View>
                            <View style={styles.flex}>
                                <Button style={{ margin: 20, borderWidth: 2, borderColor: 'gray' }} color='gray' mode="outlined" onPress={() => {
                                    setModalVisible(!modalVisible)

                                }}
                                >
                                    Cancelar
                                </Button>
                                <Button style={{ margin: 20, }} color='#2AD14F' mode="contained" onPress={() => {
                                    setModalVisible(!modalVisible)

                                }}
                                >
                                    Cadastrar
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </Portal>
        </View>
    )
}