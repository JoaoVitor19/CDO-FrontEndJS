import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import { VeichleContext } from '../../App';
import Menu from '../../components/Menu/Menu'
import api from '../../api/config'

export default function Relatorios() {

    const [data, setData] = useState()
    const veichle = useContext(VeichleContext)
    const getData = async () => {

        const response = await api.get(`/veiculo/${veichle.veichle.id}`)

        setData(response.data)
        return response.data
    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <View style={styles.globalRelatorios}>
            <LinearGradient
                colors={['#70F6C6', '#227878', '#227878']}
                style={styles.background} />
            {/* <StatusBar hidden /> */}
            <Menu title="Relatórios"/>
            <View style={styles.boxRelatorios}>
                <><View style={styles.containerRelatorios}>
                    <View style={{ justifyContent: 'space-between' }} >
                        <View style={styles.viewBox}>
                            <Text style={styles.valoresContainerRelatorios}>R$ 1000,00</Text>
                            <Text style={styles.gastoContainerRelatorios}> Gasto Total </Text>
                        </View>
                        <View style={styles.viewBox}>
                            <Text style={styles.dataContainerRelatorios}>{}</Text>
                            <Text style={styles.textContainerRelatorios}>Ultimo Abastecimento</Text>
                        </View>
                    </View>
                    <View>
                    </View>
                    <Image style={styles.relatorioContainerImages} source={require('../../assets/combustivel.png')} />
                </View>
                    <View style={styles.containerRelatorios}>
                        <View style={{ justifyContent: 'space-between' }}>
                            <View style={styles.viewBox}>
                                <Text style={styles.valoresContainerRelatorios}>R$ 2000,00</Text>
                                <Text style={styles.gastoContainerRelatorios}> Gasto Total </Text>
                            </View>
                            <View style={styles.viewBox}>
                                <Text style={styles.dataContainerRelatorios}>{veichle.veichle.date}</Text>
                                <Text style={styles.textContainerRelatorios}>Ultima Manutenção</Text>
                            </View>
                        </View>
                        <Image style={styles.relatorioContainerImages} source={require('../../assets/reparar.png')} />
                    </View><View style={styles.footerRelatorios}>
                        <Image style={styles.imgFimRelatorios} source={require('../../assets/moneyimg.png')} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22 }}>Gasto Total</Text>
                            <Text style={{ color: 'white', fontSize: 20 }}>R$ 3.000,00</Text>
                        </View>
                        <Image style={styles.imgFimRelatorios} source={require('../../assets/graficoimg.png')} />
                    </View></>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerRelatorios: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    globalRelatorios: {
        width: '100%',
        height: '100%',
    },
    viewBox: {
        marginLeft: '12%',
        marginBottom: '10%',
    },
    textNavigator: {
        color: 'white',
        fontSize: 18
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    imgFimRelatorios: {
        width: '15%',
        height: '100%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    gastoContainerRelatorios: {
        color: 'red',
        fontSize: 21,
    },
    valoresContainerRelatorios: {
        fontSize: 22,
        color: 'black',
        marginLeft: 3,
        marginTop: 15
    },
    textContainerRelatorios: {
        fontSize: 17,
        color: '#3EEB64'
    },
    dataContainerRelatorios: {
        fontSize: 19,
        marginLeft: 15,
    },
    relatorioContainerImages: {
        width: '26%',
        height: '45%',
        marginRight: '5%',
        marginTop: '10%'
    },
    boxRelatorios: {
        marginTop: 20,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around'
    },
    containerRelatorios: {
        backgroundColor: 'white',
        width: '85%',
        height: '30%',
        borderRadius: 30,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

