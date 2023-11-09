import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
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
  ButtonDelete,
  ContainerTask,
  TextInputTask,
} from './styles';
import More from '../../assets/MoreWhite.svg';
import {useDispatch, useSelector} from 'react-redux';

const List = ({route}) => {
  const dispatch = useDispatch();

  const {listData} = route.params;

  const list = useSelector(state => state.list.data);

  const [nameListTask, setNameListTask] = useState('');
  const [listTask, setListTask] = useState(
    list.find(item => item.id === listData.id),
  );

  const handlerCreateTask = (listId, taskId) => {
    if (nameListTask) {
      dispatch({
        type: 'LIST/setDataAddTask',
        payload: {
          id: listData.id,
          titleTask: nameListTask,
        },
      });
      setNameListTask('');
    }
  };

  const handleMarkPress = (listId, taskId) => {
    dispatch({
      type: 'LIST/setDataMarkTask',
      payload: {id: listId, taskId: taskId},
    });
  };

  const handlerDeleteTask = (listId, taskId) => {
    dispatch({
      type: 'LIST/setDataDeleteTask',
      payload: {id: listId, taskId: taskId},
    });
  };

  useEffect(() => {
    setListTask(list.find(item => item.id === listData.id));
  }, [list]);

  return (
    <Container>
      <ContainerTitle>
        <Title>Gustavo List Segunda</Title>
        <SubTitle>
          {listTask.tasks.filter(task => task.lida).length} de{' '}
          {listTask.tasks.length} tarefas
        </SubTitle>
        <Line />
      </ContainerTitle>
      <FlatList
        data={listTask.tasks}
        renderItem={({item}) => (
          <ContainerList>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                value={item.lida}
                onValueChange={() => handleMarkPress(listData.id, item.id)}
              />
              <TextTask>{item.titleTask}</TextTask>
            </View>
            <ButtonDelete
              onPress={() => handlerDeleteTask(listData.id, item.id)}>
              <More />
            </ButtonDelete>
          </ContainerList>
        )}
      />
      <ContainerTask>
        <TextInputTask
          placeholder="Tarefa"
          onChangeText={text => setNameListTask(text)}
        />
        <Button onPress={text => handlerCreateTask(text)}>
          <More />
        </Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
