import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Test } from './src/components/Test';

export default function App() {
  return (
    <>
      <Test />
      <Text>Olá Mundo</Text>
    </>
  );
}
