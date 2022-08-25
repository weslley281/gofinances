import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
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
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '12/04/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Dogão da Esquina',
      amount: 'R$ 16,00',
      category: {
        name: 'Alimentação',
        icon: 'shopping-bag',
      },
      date: '12/04/2022',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Garotas de sucesso - casa de massagem',
      amount: 'R$ 160,00',
      category: {
        name: 'Lazer',
        icon: 'shopping-bag',
      },
      date: '12/04/2022',
    },
    {
      id: '4',
      type: 'positive',
      title: 'Desenvolvimento de app',
      amount: 'R$ 18.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '12/04/2022',
    },
  ];

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
