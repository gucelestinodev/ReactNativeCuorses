import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Title, SubTitle, TextNumber, ButtonDelete} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import More from '../../assets/MoreWhite.svg';

const ListTasks = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const list = useSelector(state => state.list.data);

  const renderTasksCounts = tasks => {
    const pendingTasks = tasks?.filter(tasks => !tasks.lida).length;
    const completedTasks = tasks?.filter(tasks => tasks.lida).length;

    return (
      <>
        <TextNumber>{pendingTasks}</TextNumber>
        <SubTitle>A fazer</SubTitle>
        <TextNumber>{completedTasks}</TextNumber>
        <SubTitle>Concluido</SubTitle>
      </>
    );
  };

  const handlesPress = item => {
    navigation.navigate('List', {listData: item});
  };

  const handlerDeletePasta = listId => {
    dispatch({
      type: 'LIST/setDataDeletePasta',
      payload: {id: listId},
    });
  };

  return (
    <View>
      <FlatList
        horizontal
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{alignItems: 'flex-end'}}>
            <ButtonDelete onPress={() => handlerDeletePasta(item.id)}>
              <More />
            </ButtonDelete>
            <TouchableOpacity
              style={{
                width: 150,
                height: 250,
                backgroundColor: item.color,
                margin: 10,
                alignItems: 'center',
                borderRadius: 8,
              }}
              onPress={() => handlesPress(item)}>
              <Title>{item.name}</Title>
              {renderTasksCounts(item.tasks)}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ListTasks;
