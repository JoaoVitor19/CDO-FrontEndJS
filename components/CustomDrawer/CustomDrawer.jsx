import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { VeichleContext } from '../../App';

export default function CustomDrawer({props,navigation}) {

    const veichle = useContext(VeichleContext)
    
    return (    
        <View style={{ flex: 1, backgroundColor: "#107F72" }}>
            <StatusBar hidden={true} />
            <DrawerContentScrollView {...props}>
                <View style={Styles.drawerItems}>
                    <Image source={require('../../assets/images/oleoIcon.png')} style={Styles.pngOleo} />
                    <View style={{ marginLeft: 25, justifyContent: 'center' }}>
                        <Text style={Styles.drawerName} >Rogério Maria</Text>
                        <View style={Styles.drawerHead}>
                            <Text style={{fontWeight:"bold"}} >{veichle.veichle.modelo}</Text>
                            <Text style={{fontWeight:"bold"}} >{veichle.veichle.placa}</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.drawerMenu}>
                    <View style={{marginTop: 15}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Veiculos')}>
                            <View style={Styles.viewDrawer}>
                                <Text style={Styles.textDrawer}>Serviços</Text>
                                <Image
                                    source={require('../../assets/images/serviçosIcon.png')}
                                    style={Styles.iconAbs}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Abastecimento')}>
                            <View style={Styles.viewDrawer}>
                                <Text style={Styles.textDrawer}>Abastecimento</Text>
                                <Image
                                    source={require('../../assets/images/abastecerIcon.png')}
                                    style={Styles.iconAbs}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Serviço')}>
                            <View style={Styles.viewDrawer}>
                                <Text style={Styles.textDrawer}>Serviços</Text>
                                <Image
                                    source={require('../../assets/images/relatoriosIcon.png')}
                                    style={Styles.iconAbs}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Relatórios')}>
                            <View style={Styles.viewDrawer}>
                                <Text style={Styles.textDrawer}>Relatório</Text>
                                <Image
                                    source={require('../../assets/images/relatoriosIcon.png')}
                                    style={Styles.iconAbs}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Histórico')}>
                            <View style={Styles.viewDrawer}>
                                <Text style={Styles.textDrawer}>Histórico</Text>
                                <Image
                                    source={require('../../assets/images/historyIcon.png')}
                                    style={Styles.iconAbs}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style={Styles.viewDrawer2}>
                                <Text style={Styles.textDrawer}>Log out</Text>
                                <Image
                                    source={require('../../assets/images/logoutIcon.png')}
                                    style={Styles.iconAbs}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    pngOleo: {
        width: 90,
        height: 90,
        marginLeft: 7
    },
    iconAbs: {
        width: 30,
        height: 30
    },
    textDrawer: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    viewDrawer: {
        flexDirection: 'row',
        marginBottom: 35,
        justifyContent: 'space-between',
        marginRight: 15,
        marginLeft: 15,
    },
    viewDrawer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 20
    },
    drawerName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6
    },
    drawerBold: {
        fontWeight: 'bold',
    },
    drawerItems: {
        flexDirection: 'row',
        borderRadius: 20,
        margin: 10,
        padding: 6,
        backgroundColor: "white",
    },
    drawerHead: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    drawerMenu: {
        backgroundColor: "white",
        borderRadius: 20,
        margin: 10,
        padding: 6,
        marginTop: 30
    }
})