import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Abastecimento from '../screens/Abastecimento/Abastecimento';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import Login from '../screens/Login/Login';
import Veiculos from '../screens/Veiculos/Veiculos'
import Relatorios from '../screens/Relatorios/Relatorios'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Login"
            drawerContent={props => <CustomDrawer props={undefined} {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#107F72",
                    height: 65,
                },
                headerTitleStyle: {
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 28
                },
                headerTitleAlign: "center"
            }}>
            <Drawer.Screen name="Login" component={Login}
                options={{
                   headerShown: false,
                   //  swipeEnabled: false
                }}></Drawer.Screen>
            <Drawer.Screen name="Veiculos" component={Veiculos}
                options={{}}></Drawer.Screen>
            <Drawer.Screen name="Abastecimento" component={Abastecimento}
                options={{}} ></Drawer.Screen>
            <Drawer.Screen name="History" component={Relatorios}
                options={{}} ></Drawer.Screen>
            <Drawer.Screen name="Relatórios" component={Relatorios}
                options={{}} ></Drawer.Screen>
        </Drawer.Navigator>
    </NavigationContainer>
)

export default DrawerNavigator;