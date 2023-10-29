import * as React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Button,
  TextButton,
  ContainerTitle,
  Line,
  ContainerList,
  TextTask,
  ContainerCheckList,
  ContainerTask,
  TextInputTask,
} from './styles';
import More from '../../assets/MoreWhite.svg';

const List = ({navigation}) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Gustavo List Segunda</Title>
        <SubTitle>0 de 2 tarefas</SubTitle>
        <Line />
      </ContainerTitle>
      <ContainerList>
        <ContainerCheckList />
        <TextTask>Curso React Native</TextTask>
      </ContainerList>
      <ContainerList>
        <ContainerCheckList />
        <TextTask>Curso React Native</TextTask>
      </ContainerList>
      <ContainerTask>
        <TextInputTask placeholder="Tarefa" />
        <Button>
          <More />
        </Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
