import React from 'react';
import {
  Container,
  Footer,
  Header,
  SignInTitle,
  Title,
  TitleWraprer,
} from './styles';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWraprer>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>Controle as suas finanças de forma simples</Title>
        </TitleWraprer>

        <SignInTitle>Faça o login com uma das contas abaixo</SignInTitle>
      </Header>

      <Footer></Footer>
    </Container>
  );
}
