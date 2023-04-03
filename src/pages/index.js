import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '../routes';

export default function App() {
  return (
    <NavigationContainer style={{backgroundColor: '#f00'}}>
      <StatusBar style="dark" animated={true} />
      <Routes style={{backgroundColor: '#f00'}} />
    </NavigationContainer>
  );
}
