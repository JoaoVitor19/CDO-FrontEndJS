import React, { useState, createContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerNavigator from './routes/Drawer';

const context = {
  state: {
    id: '',
    placa: '',
    ano: '',
    modelo: '',
    user: '',
    veichleCondition: ''
  },
  setState: () => {}
}

export const VeichleContext = createContext(context)

export default function App() {
  const [veichle, setVeichle] = useState(context.state)

  return (
    <PaperProvider>
      <VeichleContext.Provider value={{veichle, setVeichle}}>
        <DrawerNavigator />
      </VeichleContext.Provider>
    </PaperProvider>
  );
}