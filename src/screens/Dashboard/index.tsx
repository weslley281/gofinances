import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HighlightCard } from '../../components/HighlightCard';
import { useFocusEffect } from '@react-navigation/native';

import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  UserGreeting,
  UserName,
  User,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>();

  async function loadTransactions() {
    const datakey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(datakey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setData(transactionsFormatted);
  }

  //fetches transactions at the moment the application loads
  useEffect(() => {
    loadTransactions();
  }, []);

  //fetches transactions when the application is loaded
  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo />
            <User
              source={{
                uri: 'https://avatars.githubusercontent.com/u/65488214?v=4',
              }}
            >
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Weslley</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entradia dia 13 de abril de 2022"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.500,00"
          lastTransaction="Ultima entradia dia 4 de maio de 2022"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 15.900,00"
          lastTransaction="Ultima entradia dia 07 de setembro de 2022"
        />
      </HighlightCards>

      <Transactions>
        <Title>Lista de Transações</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
