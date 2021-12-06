import React ,{useState, useEffect} from 'react';
import { View } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import DrawerNavigator from './routes/Drawer';
import Abastecimento from './screens/Abastecimento/Abastecimento';


export default function App() {

  return (
    <View>
      <Abastecimento/>
    </View>
    
    /*<PaperProvider>
      
      <DrawerNavigator />
    </PaperProvider>*/
  )
}