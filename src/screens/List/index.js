import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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

const List = ({route}) => {
  const {listData} = route.params;

  const [checkBox, setCheckBox] = useState(false);

  console.log(listData);
  return (
    <Container>
      <ContainerTitle>
        <Title>Gustavo List Segunda</Title>
        <SubTitle>
          {listData.tasks.filter(task => task.lida).length} de{' '}
          {listData.tasks.length} tarefas
        </SubTitle>
        <Line />
      </ContainerTitle>
      <FlatList
        data={listData.tasks}
        renderItem={({item}) => (
          <ContainerList>
            <CheckBox value={item.lida} onValueChange={setCheckBox} />
            <TextTask>{item.titleTask}</TextTask>
          </ContainerList>
        )}
      />
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
