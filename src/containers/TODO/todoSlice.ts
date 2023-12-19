import {createSlice} from '@reduxjs/toolkit';
import {getTask, postTask} from './todoThunk';
import {Tasks} from "../../types";

interface TodoSlice {
  isLoading: boolean,
  task: Tasks[];
  loading: boolean,
  error: boolean,
  checkbox: boolean,
  loadRequest: boolean,
}

const initialState: TodoSlice = {
  isLoading: false,
  task: [],
  loading: false,
  error: false,
  checkbox: true,
  loadRequest: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTask.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(getTask.rejected, (state, {payload: task}) => {
      state.loading = false;
      state.task = task;
    });

    builder.addCase(getTask.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(postTask.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(postTask.fulfilled, (state, action) => {
      state.loading = true;
      state.task = action.payload;
    });

    builder.addCase(postTask.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  }
});

export const taskReducer = todoSlice.reducer;


