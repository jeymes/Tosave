import React from 'react';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register'
import { StatusBar } from 'react-native';

function App(): JSX.Element {
  return (
    <>
    <StatusBar 
    backgroundColor='transparent'
    barStyle='light-content'
    translucent
    />
   <Register/>
    </>
  );
}

export default App;
