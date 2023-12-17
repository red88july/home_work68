import {createSlice} from '@reduxjs/toolkit';

interface TodoSlice {
  value: string,
}

const initialState: TodoSlice = {
  value: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export const taskReducer = todoSlice.reducer;