import {configureStore} from '@reduxjs/toolkit'; //import do redux
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; //Persistencia dos dados
import AsyncStorage from '@react-native-async-storage/async-storage'; //Pra amazenar localmente no proprio dispositivo
import {rootReducer} from './reducer'; //importanto index.js reducer

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //é a configuração para persistir os dados no celular passando esses dois parametros, onde crio essa constante para persistir

const middlewares = [];

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
});

const persistor = persistStore(store);

export {store, persistor};
