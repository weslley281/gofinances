import { StyleSheet, Text, View } from 'react-native';

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
} from './styles';

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
    </Container>
  );
}
