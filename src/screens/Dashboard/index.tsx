import { StyleSheet, Text, View } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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
} from './styles';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
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
          <Icon name="power" />
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

        <TransactionCard />
      </Transactions>
    </Container>
  );
}
