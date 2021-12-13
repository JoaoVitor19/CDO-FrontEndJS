
import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Image, Animated, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import { Portal, Modal, Button } from 'react-native-paper';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../api/veiculo';
import { VeichleContext } from '../App';


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    imageButton: {
        width: '65%',
        height: '50%',
        tintColor: 'white',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
    modalBack: {
        margin: '3%',
        backgroundColor: 'white',
        padding: '5%',
        borderRadius: 20
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
        margin: '5%'
    },
    textMargin: {
        marginRight: 20
    },
    textUp: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    delButton: {
        width: 100,
        height: 132,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 10,
        top: 11

    },
    editButton: {
        width: 100,
        height: 132,
        backgroundColor: '#2AD14F',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 10,
        top: 11

    },
    modalContent: {
        height: '52%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: '5%'
    },
    modalEdit: {
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderColor: 'red',
        height: 325,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: '10%'
    },
    input: {
        width: 135,
        backgroundColor: '#F3F1F1',
        borderColor: '#F3F1F1',
        borderRadius: 10,
        margin: '3%',
        borderWidth: 1,
        padding: '2%',
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
    const [placa, setPlaca] = useState("")
    const [ano, setAno] = useState()

    const form = {
        placa: placa,
        ano: ano,
    }

    const displayModal = id => {
        setState(id)
        //console.log(state)
    }
    const closeModal = () => {
        setState(null)
    }

    const { veichle, setVeichle } = useContext(VeichleContext)
    const onClick = (veiculo) => {
        navigation.navigate('Relatórios')

        setVeichle({
            ...veichle,
            id: veiculo.id,
            placa: veiculo.placa,
            ano: veiculo.ano,
            modelo: veiculo.model.modelo,
            user: veiculo.user,
            veichleCondition: veiculo.veiculoCondicao

        })
    }
    // console.log('onClick', veiculo)

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
        await api.delete(`/veiculo/${id}`)
        getData()
    }

    const putData = async (id) => {

        await api.put(`/veiculo/${id}`, form)
        setStateB(null)
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
                            <TouchableOpacity onPress={() => onClick(veiculos)} >
                                <View style={styles.modalBack}>
                                    <View style={styles.flex}>
                                        <View style={styles.textMargin}>
                                            <Text style={styles.textTitle}>{veiculos.placa}</Text>
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
                                style={{ height: '80%' }}
                                key={veiculos.id}
                                visible={state === veiculos.id}
                                onDismiss={closeModal}>
                                <View style={styles.modalContent}>
                                    <View>
                                        <Text style={styles.textModal}>Tem certeza que deseja excluir ?</Text>
                                    </View>
                                    <View style={styles.flex}>
                                        <Button style={{ margin: '2%', borderWidth: 2, borderColor: 'gray' }} color='gray' mode="outlined" onPress={closeModal}
                                        >
                                            Cancelar
                                        </Button>
                                        <Button style={{ margin: '2%' }} color='red' mode="contained" onPress={() => handleRemove(veiculos.id)}>
                                            Delete
                                        </Button>
                                    </View>
                                </View>
                            </Modal>
                        </Portal>
                        <Portal>
                            <Modal
                                style={{ height: '80%' }}
                                visible={stateB === veiculos.id}
                                onDismiss={closeModalB}>
                                <View style={styles.modalEdit}>
                                    <View style={styles.flexInput}>
                                        <View>
                                            <Text style={styles.textModal}>Editar Veiculos {data.placa}</Text>
                                        </View>
                                        <View style={styles.flexInput}>
                                            <View>
                                                <Text style={styles.textInput}>Placa</Text>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder={veiculos.placa}
                                                    maxLength={7}
                                                    onChangeText={text => setPlaca(text)}
                                                />
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
        </View>
    );
}