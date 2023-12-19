import {createSlice} from '@reduxjs/toolkit';
import { postTask} from './todoThunk';

export interface Task {
  task: string,
}

interface TodoSlice {
  isLoading: boolean,
  task: string;
  loading: boolean,
  error: boolean,
  checkbox: boolean,
}

const initialState: TodoSlice = {
  isLoading: false,
  task: '',
  loading: false,
  error: false,
  checkbox: true,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    isLoadingSpinner: (state) => {
      state.isLoading = true;
    },
    isStopSpinner: (state) => {
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postTask.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(postTask.fulfilled, (state,action) => {
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
export const {
  isLoadingSpinner,
  isStopSpinner}= todoSlice.actions;


