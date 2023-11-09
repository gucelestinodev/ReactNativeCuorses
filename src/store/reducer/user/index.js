import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {
    name: '',
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setDataUser(state, action) {
      state.data.name = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {setDataUser, setLoading, setError} = userSlice.actions;
export default userSlice.reducer;
