import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import api from '../../api/history'
import { FAB } from 'react-native-paper';

const styles = StyleSheet.create({
    flex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: '5%'

    },

    flexEndereco: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '5%'
    },

    background: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    aloneBox: {
        width: '100%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderLeftWidth: 4,
        borderLeftColor: 'red',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,

    },

    contentBox: {
        width: '90%',
    },

    box: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },

    endereco: {
        color: 'red',
        fontSize: 12,
        paddingBottom: 60
    },

    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    fab: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        width: 80,
        backgroundColor: '#FC5656',
        height: 80,
        borderRadius: 100,
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export default function History() {

    const [data, setData] = useState([])

    const getData = async () => {

        const response = await api.get("/veiculo/1") //fazer o numero vir pelo navigate

        setData(response.data)
        return response.data
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <LinearGradient
                colors={['#70F6C6', '#227878', '#227878']}
                style={styles.background}>
                <SafeAreaView>
                    <ScrollView>

                        <View style={styles.background}>
                            <View style={styles.box}>
                                {data.map((service) =>
                                    <View style={styles.aloneBox} key={service.id}>
                                        <View style={styles.contentBox}>
                                            <View style={styles.flex}>
                                                <Text style={styles.textStyle}>{service.tpRecebeServico.nome}</Text>
                                                <Text style={styles.textStyle}></Text>
                                            </View>
                                            <View style={styles.flexEndereco}>
                                                <Text style={styles.endereco}>{service.loja.endereco}</Text>
                                                <Text></Text>
                                            </View>
                                            <View style={styles.flex}>
                                                <Text style={styles.textStyle}>R${service.valorPago}</Text>
                                                <Text style={styles.textStyle}>{service.data}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
            {/* <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => console.log('Pressed')}
                color="white"
            /> */}
        </>
    );
}