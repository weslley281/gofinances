import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HistoryCard } from '../../components/HistoryCard';
import { Container, Header, Title } from './styles';

export function Resume() {
  async function loadData() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];
  }

  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>

      <HistoryCard title="Compras" amount="R$ 243,38" color="blue" />
    </Container>
  );
}
