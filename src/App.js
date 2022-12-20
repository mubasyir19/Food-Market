import {StyleSheet, View} from 'react-native';
import React from 'react';
import SignIn from './pages/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Home} from './pages';

export default function App() {
  return (
    // <Home />
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
