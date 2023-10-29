import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import List from './screens/List';

function HomeScreen({navigation}) {
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
            navigation.navigate('HomePage');
          }}>
          <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
