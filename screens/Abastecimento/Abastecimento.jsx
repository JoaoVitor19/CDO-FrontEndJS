import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import api from '../../api/abastecimento'
import Menu from '../../components/Menu/Menu'
import { VeichleContext } from '../../App';
import ModalAbastecimento from './modal/ModalAbast';

const styles = StyleSheet.create({
    flex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5
    },


    flexPosto: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    background: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    aloneBox: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderLeftWidth: 4,
        borderLeftColor: 'red',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20
    },

    box: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },

    posto: {
        color: 'red',
        fontSize: 12,
        paddingBottom: 60
    },

    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default function Abastecimento() {

    const [data, setData] = useState([])
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
        <>
            <ScrollView>
                <Menu title="Abastecimento" style={{ marginRight: 30 }} />
                <LinearGradient
                    colors={['#70F6C6', '#227878', '#227878']}
                    style={styles.background}>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={styles.background}>
                                <View style={styles.box}>
                                    {data.map((abastecimento) =>
                                        <View style={styles.aloneBox} key={abastecimento.id}>
                                            <View style={styles.flex}>
                                                <Text style={styles.textStyle}>{abastecimento.combustivel.tcombustivel}</Text>
                                                <Text style={styles.textStyle}>{abastecimento.litros}L</Text>
                                            </View>
                                            <View style={styles.flexPosto}>
                                                <Text style={styles.posto}>Posto de Combustivel</Text>
                                                <Text></Text>
                                            </View>
                                            <View style={styles.flex}>
                                                <Text style={styles.textStyle}>R${abastecimento.vlLitro}</Text>
                                                <Text style={styles.textStyle}>{abastecimento.dataTime}</Text>
                                            </View>
                                        </View>

                                    )}
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                    <FAB
                        style={styles.fab}
                        icon="plus"
                        onPress={() => console.log('Pressed')}
                        color="white"
                    />
                    {/* <ModalAbastecimento /> */}
            </LinearGradient>



        </ScrollView>
        </>
    );
}