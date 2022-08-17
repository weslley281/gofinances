import React from 'react';
import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
} from './styles';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />

        <Footer>
          <Amount>R$ 17.400,00</Amount>
          <LastTransaction>Ultima Entrada dia 13 de Abril</LastTransaction>
        </Footer>
      </Header>
    </Container>
  );
}
