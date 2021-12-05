import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import DrawerNavigator from './routes/Drawer';

export default function App() {
  return (
    <PaperProvider>
      <DrawerNavigator />
    </PaperProvider>
  );
}