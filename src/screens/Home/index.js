import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function Home({navigation}) {
  const dispatch = useDispatch();
  const [nameApp, setNameApp] = useState('');

  const user = useSelector(state => state.user.data.name);

  const handlerButton = () => {
    if (nameApp) {
      dispatch({type: 'USER/setDataUser', payload: nameApp});
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    if (user) {
      navigation.navigate('Home');
    }
  }, [user]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#72BFE8',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: 'bold'}}>
        Escreva Seu Nome:
      </Text>
      <View style={{width: '70%'}}>
        <TextInput
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 18,
          }}
          placeholder="Nome"
          onChangeText={text => setNameApp(text)}
        />
        <TouchableOpacity
          style={{
            height: 47,
            backgroundColor: '#96D897',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 18,
          }}
          onPress={() => {
            handlerButton();
          }}>
          <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
