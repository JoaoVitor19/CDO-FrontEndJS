import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated, TextInput } from 'react-native';
import { Portal, Modal, Button } from 'react-native-paper';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import api from '../api/veiculo';


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    imageButton: {
        width: 60,
        height: 60,
        tintColor: 'white'
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
        fontFamily: 'Rubik',
        fontSize: 18,
        marginRight: 30
    },
    textBold: {
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 20
    },
    textModal: {
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        fontSize: 22,
        margin: 10
    },
    textMargin: {
        marginRight: 34
    },
    textUp: {
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    },
    delButton: {
        width: 100,
        height: 170,
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
        height: 170,
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

    const [data, setData] = useState([''])

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleB, setModalVisibleB] = useState(false);

    const getData = async () => {

        const response = await api.get("/")
        setData(response.data.content)
        //console.log(response.data.content)
    }


    const handleRemove = async (e) => {
        await api.delete(`/${e}`)
            .then(res => {
                console.log(res)
            })
    }


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        handleRemove
    }, [data])



    /* useEffect(() => {
        console.log(data)
    },[data]) */

    return (
        <View>
            {data.map((veiculos, index) => (
                <View>
                    <Swipeable
                        renderRightActions={() => (
                            <Animated.View>
                                <View>
                                    <RectButton
                                        style={styles.delButton}
                                        onPress={() => setModalVisible(true)}
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
                                        onPress={() => setModalVisibleB(true)}
                                    >
                                        <Image style={styles.imageButton} source={require('../assets/pen.png')} />
                                    </RectButton>
                                </View>
                            </Animated.View>
                        )}
                    >
                        <View key={index} style={[styles.modalBack]}>
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
                                <Image style={styles.image} source={require('../assets/car.png')} />
                            </View>
                            <Text style={styles.textUp}>Último serviço realizado em: {veiculos.services.data}</Text>
                        </View>
                    </Swipeable>
                    <Portal>
                        <Modal
                            contentContainerStyle={styles.modalContent}
                            visible={modalVisible}
                            onDismiss={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View>
                                <Text style={styles.textModal}>Tem certeza que deseja excluir ?</Text>
                            </View>
                            <View style={styles.flex}>
                                <Button style={{ margin: 20, borderWidth: 2, borderColor: 'gray' }} color='gray' mode="outlined" onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                    Cancelar
                                </Button>
                                <Button style={{ margin: 20 }} color='red' mode="contained" onPress={() => {
                                    handleRemove(veiculos.id);
                                }}>
                                    Delete
                                </Button>
                            </View>
                        </Modal>
                    </Portal>
                    <Portal>
                        <Modal
                            contentContainerStyle={styles.modalEdit}
                            visible={modalVisibleB}
                            onDismiss={() => {
                                setModalVisibleB(!modalVisibleB);
                            }}>
                            <View style={styles.flexInput}>
                                <View style={styles.flexInput}>
                                    <View>
                                        <Text style={styles.textModal}>Editar Veiculos</Text>
                                    </View>
                                    <View style={styles.flex}>
                                        <View>
                                            <Text style={styles.textInput}>Marca</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder={veiculos.model.brand.marca}
                                                maxLength={12}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.textInput}>Modelo</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder={veiculos.model.modelo}
                                                maxLength={30}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.flex}>
                                        <View>
                                            <Text style={styles.textInput}>Placa</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder={veiculos.placa}
                                                maxLength={7}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.textInput}>Data</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder={veiculos.services.data}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.textInput}>Placa</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={veiculos.veiculoCondicao.condicao}
                                            maxLength={10}
                                        />
                                    </View>
                                </View>
                                <View style={styles.flex}>
                                    <Button style={{ margin: 20, borderWidth: 2, borderColor: 'gray' }} color='gray' mode="outlined" onPress={() => {
                                        setModalVisibleB(!modalVisibleB)

                                    }}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button style={{ margin: 20 }} color='#2AD14F' mode="contained" onPress={() => {
                                        handleRemove(veiculos.id);
                                    }}>
                                        Salvar
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                    </Portal>
                </View>
            ))
            }
        </View >
    );
}

