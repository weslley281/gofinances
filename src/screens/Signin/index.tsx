import React from 'react';
import { Container } from './styles';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export function Signin() {
  return (
    <Container>
      <Header>
        <TitleWraprer>
          <LogoSvg width={RFValue(200)} height={RFValue(200)} />
        </TitleWraprer>
      </Header>
    </Container>
  );
}
