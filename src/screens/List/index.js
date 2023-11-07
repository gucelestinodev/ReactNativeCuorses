import React, {useState, useEffect} from 'react';
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
  ContainerCheckList,
  ContainerTask,
  TextInputTask,
  ButtonDelete,
} from './styles';
import More from '../../assets/MoreWhite.svg';
import {useDispatch, useSelector} from 'react-redux';

const List = ({route}) => {
  const dispatch = useDispatch();

  const {listData} = route.params;

  const [checkBox, setCheckBox] = useState(
    listData.tasks.filter(task => task.lida).map(task => task.id),
  );
  const [nameListTasks, setNameListTasks] = useState('');

  const handlerCreateTask = () => {
    if (nameListTasks) {
      dispatch({
        type: 'LIST/setDataAddTask',
        payload: {id: 1, titleTask: nameListTasks},
      });
    }
  };

  const handleMarkPress = (listId, taskId) => {
    setCheckBox(currentIds => {
      if (currentIds.includes(taskId)) {
        return currentIds.filter(i => i !== taskId);
      } else {
        dispatch({
          type: 'LIST/setDataMarkTask',
          payload: {id: listId, taskId: taskId},
        });
        return [...currentIds, taskId];
      }
    });
  };

  const handlerDeleteTask = (listId, taskId) => {
    dispatch({
      type: 'LIST/setDataDeleteTask',
      payload: {id: listId, taskId: taskId},
    });
  };

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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                value={checkBox.includes(item.id)}
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
          onChangeText={text => setNameListTasks(text)}
        />
        <Button onPress={() => handlerCreateTask()}>
          <More />
        </Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
