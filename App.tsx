import React from 'react';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register'
import { StatusBar } from 'react-native';
import { Login } from './src/screens/Login';
import { Routes } from './src/routes';

function App(): JSX.Element {
  return (
    <>
    <StatusBar 
    backgroundColor='transparent'
    barStyle='light-content'
    translucent
    />
   <Routes/>
    </>
  );
}

export default App;
