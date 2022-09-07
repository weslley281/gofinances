import React, { useContext } from 'react';
import {
  Container,
  Footer,
  FooterWrapper,
  Header,
  SignInTitle,
  Title,
  TitleWraprer,
} from './styles';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { AuthContext } from '../../AuthContext';

export function SignIn() {
  const data = useContext(AuthContext);
  console.log(data);

  return (
    <Container>
      <Header>
        <TitleWraprer>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>Controle as suas finanças de forma simples</Title>
        </TitleWraprer>

        <SignInTitle>Faça o login com uma das contas abaixo</SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />

          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
