//libraries
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//themes
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';

//components
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}
