import {combineReducers} from '@reduxjs/toolkit';

import userReducer from './user';
import listReducer from './list';

export const rootReducer = combineReducers({
  user: userReducer,
  list: listReducer,
});
