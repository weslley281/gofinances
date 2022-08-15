import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Test } from './src/components/Test';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}
