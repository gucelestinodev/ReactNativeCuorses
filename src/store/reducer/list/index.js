import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const listSlice = createSlice({
  name: 'LIST',
  initialState,
  reducers: {
    setDataList(state, action) {
      const newItem = {
        id: state.data.length + 1,
        name: action.payload.name,
        color: action.payload.color,
        tasks: [],
      };
      state.data.push(newItem);
    },
    setDataAddTask(state, action) {
      const listItem = state.data.find(item => item.id === action.payload.id);
      if (listItem) {
        const newTask = {
          id: listItem.tasks.length + 1,
          titleTask: action.payload.titleTask,
          lida: false,
        };
        listItem.tasks.push(newTask);
      }
    },
    setDataMarkTask(state, action) {
      const listItem = state.data.find(item => item.id === action.payload.id);
      if (listItem) {
        const task = listItem.tasks.find(
          task => task.id === action.payload.taskId,
        );
        if (task) {
          task.lida = true;
        }
      }
    },
    setDataDeleteTask(state, action) {
      const listItem = state.data.find(item => item.id === action.payload.id);
      if (listItem) {
        listItem.tasks = listItem.tasks.filter(
          task => task.id !== action.payload.taskId,
        );
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setErrorList(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setDataList,
  setDataAddTask,
  setDataMarkTask,
  setDataDeleteTask,
  setLoading,
  setErrorList,
} = listSlice.actions;
export default listSlice.reducer;
