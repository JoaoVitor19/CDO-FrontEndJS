import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import api from '../../api/history'
import { FAB } from 'react-native-paper';

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

    const [data, setData] = useState({})

    const getData = async () => {

        const response = await api.get("/1")

        setData(response.data.content)
        return response.data
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ScrollView>
            <FAB
                style={styles.fab}
                icon="plus" 
                onPress={() => console.log('Pressed')}
                color="white"
            />
            <LinearGradient
                colors={['#70F6C6', '#227878', '#227878']}
                style={styles.background}>
                <View style={styles.background}>
                    <View style={styles.box}>
                        {data.map(({veiculos}) =>
                            <View style={styles.aloneBox} key={veiculos.services.id}>
                                <View style={styles.flex}>
                                    <Text style={styles.textStyle}>{veiculos.services.tpRecebeServico}</Text>
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
            </LinearGradient>
        </ScrollView>
    );
}