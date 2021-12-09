import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, Image, Animated, TextInput, TouchableOpacity } from 'react-native';
import { Portal, Modal, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { Swipeable, RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../api/veiculo';
import { TouchableOpacityBase } from 'react-native';
import NewVeiculo from './NewVeiculo';



const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    imageButton: {
        width: 60,
        height: 60,
        tintColor: 'white',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
    modalBack: {
        margin: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
    },
    textTitle: {
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    textText: {
        fontSize: 18,
        marginRight: 20
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 20
    },
    textModal: {
        fontWeight: 'bold',
        fontSize: 22,
        margin: 10
    },
    textMargin: {
        marginRight: 34
    },
    textUp: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    },
    delButton: {
        width: 100,
        height: 130,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 10,
        top: 10

    },
    editButton: {
        width: 100,
        height: 130,
        backgroundColor: '#2AD14F',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 10,
        top: 10

    },
    modalContent: {
        height: 150,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 30
    },
    modalEdit: {
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderColor: 'red',
        height: 450,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 25
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
    textInput: {
        marginLeft: 11,
        fontSize: 18,
        textAlign: 'left'
    }
});

export default function ModalVeiculos() {

    const [state, setState] = useState()
    const [stateB, setStateB] = useState()
    const [data, setData] = useState([])
    const [id, setId] = useState(null)
    const [placa, setPlaca] = useState("")
    const [ano, setAno] = useState()
    const [modelId, setModelId] = useState()
    const [condicaoId, setCondicaoId] = useState()



    const displayModal = id => {
        setState(id)
        //console.log(state)
    }
    const closeModal = () => {
        setState(null)
    }

    const displayModalB = id => {
        setStateB(id)
        console.log(stateB)
    }
    const closeModalB = () => {
        setStateB(null)
    }

    const getData = async () => {
        const response = await api.get("/veiculo/user")
        setData(response.data)
        //console.log(response.data)
    }

    const handleRemove = async (id) => {
        await api.delete(`/veiculo/users/${id}`)
        console.log(id)
        alert('Veiculo deletado com sucesso')
        getData()
    }

    const form = {
        placa: placa,
        ano: ano,
    }

    const putData = async (id) => {

        console.log(form)
        await api.put(`/veiculo/${id}`, form)
        getData()
    }

    const navigation = useNavigation();

    useEffect(() => {
        getData()
    }, [])

    /* useEffect(() => {
        console.log(data)
    },[data])  */

    return (
        <View>
            <ScrollView >
                {data.map((veiculos) => (
                    <View key={veiculos.id}>
                        <Swipeable
                            renderRightActions={() => (
                                <Animated.View>
                                    <View>
                                        <RectButton
                                            style={styles.delButton}
                                            onPress={() =>
                                                displayModal(veiculos.id)
                                            }
                                        >
                                            <Image style={styles.imageButton} source={require('../assets/bin.png')} />
                                        </RectButton>
                                    </View>
                                </Animated.View>
                            )}
                            renderLeftActions={() => (
                                <Animated.View>
                                    <View>
                                        <RectButton
                                            style={styles.editButton}
                                            onPress={() => displayModalB(veiculos.id)}
                                        >
                                            <Image style={styles.imageButton} source={require('../assets/pen.png')} />
                                        </RectButton>
                                    </View>
                                </Animated.View>
                            )}
                        >
                            <TouchableOpacity onPress={() => navigation.navigate('Relatórios', veiculos.id)} >
                                <View style={styles.modalBack}>
                                    <View style={styles.flex}>
                                        <View style={styles.textMargin}>
                                            <Text style={styles.textTitle}>{veiculos.id}{veiculos.placa}</Text>
                                            <View style={styles.flex}>
                                                <Text style={styles.textBold}>{veiculos.model.modelo}</Text>
                                                <Text style={styles.textText}>{veiculos.model.brand.marca}</Text>
                                            </View>
                                            <View style={styles.flex}>
                                                <Text style={styles.textText}>{veiculos.ano}</Text>
                                                <Text style={styles.textText}>{veiculos.veiculoCondicao.condicao}</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            transform: [
                                                { scaleX: -1 }
                                            ]
                                        }}>
                                            <Image style={styles.image} source={require('../assets/car.png')} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Swipeable>
                        <Portal>
                            <Modal
                                style={{ height: 580 }}
                                key={veiculos.id}
                                visible={state === veiculos.id}
                                onDismiss={closeModal}>
                                <View style={styles.modalContent}>
                                    <View>
                                        <Text style={styles.textModal}>Tem certeza que deseja excluir ?</Text>
                                    </View>
                                    <View style={styles.flex}>
                                        <Button style={{ margin: 20, borderWidth: 2, borderColor: 'gray' }} color='gray' mode="outlined" onPress={closeModal}
                                        >
                                            Cancelar
                                        </Button>
                                        <Button style={{ margin: 20 }} color='red' mode="contained" onPress={() => handleRemove(veiculos.id)}>
                                            Delete {veiculos.id}
                                        </Button>
                                    </View>
                                </View>
                            </Modal>
                        </Portal>
                        <Portal>
                            <Modal
                                contentContainerStyle={styles.modalEdit}
                                visible={stateB === veiculos.id}
                                onDismiss={closeModalB}>
                                <View style={styles.flexInput}>
                                    <View style={styles.flexInput}>
                                        <View>
                                            <Text style={styles.textModal}>Editar Veiculos {veiculos.id}</Text>
                                        </View>
                                        <View style={styles.flex}>
                                            <View>
                                                <Text style={styles.textInput}>Modelo</Text>
                                                
                                            </View>
                                        </View>
                                        <View style={styles.flex}>
                                            <View>
                                                <View>
                                                    <Text style={styles.textInput}>Placa</Text>
                                                    <TextInput
                                                        style={styles.input}
                                                        placeholder={veiculos.placa}
                                                        maxLength={7}
                                                        onChangeText={text => setPlaca(text)}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.textInput}>Ano</Text>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder={"Ano"}
                                                    maxLength={10}
                                                    onChangeText={text => setAno(text)}
                                                />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.textInput}>Condição</Text>
                                            
                                        </View>
                                    </View>
                                    <View style={styles.flex}>
                                        <Button style={{ margin: 20, borderWidth: 2, borderColor: 'gray' }} color='gray' mode="outlined" onPress={closeModalB}>
                                            Cancelar
                                        </Button>
                                        <Button textTitle="Submit" style={{ margin: 20 }} color='#2AD14F' mode="contained" onPress={() => putData(veiculos.id)}>
                                            Salvar
                                        </Button>
                                    </View>
                                </View>
                            </Modal>
                        </Portal>
                    </View>
                ))
                }
            </ScrollView >
            <View >
                <NewVeiculo />
            </View>
        </View>
    );
}

