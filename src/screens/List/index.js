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

  const list = useSelector(state => state.list.data);

  const [nameListTasks, setNameListTasks] = useState('');
  const [listTask, setListTask] = useState(
    list.find(item => item.id === listData.id),
  );

  const handlerCreateTask = () => {
    if (nameListTasks) {
      dispatch({
        type: 'LIST/setDataAddTask',
        payload: {id: listData.id, titleTask: nameListTasks},
      });
      setNameListTasks('');
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
          value={nameListTasks}
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
