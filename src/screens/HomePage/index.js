import * as React from 'react';
import {
  Container,
  Title,
  Button,
  TextButton,
  ContainerTitle,
  ContainerButton,
  SubTitle,
  Line,
  ContainerText,
} from './styles';
import More from '../../assets/More.svg';

const HomePage = ({navigation}) => {
  return (
    <Container>
      <ContainerTitle>
        <Line />
        <ContainerText>
          <Title>Gustavo</Title>
          <SubTitle>List</SubTitle>
        </ContainerText>
        <Line />
      </ContainerTitle>
      <ContainerButton>
        <Button
          onPress={() => {
            navigation.navigate('List');
          }}>
          <More />
        </Button>
        <TextButton>Adicionar a lista</TextButton>
      </ContainerButton>
    </Container>
  );
};

export default HomePage;
