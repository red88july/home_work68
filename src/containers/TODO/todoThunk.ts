import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const postTask = createAsyncThunk(
  'todo/fetch', async (task: string) => {
    const payloadData = {
      task: task,
    };
    const response = await axiosApi.post('/task.json', payloadData);
    return response.data;
  }
);

export const getTask = createAsyncThunk(
  'todo/fetch', async () => {
    const response = await axiosApi.get('/task.json');
    return response.data;
  }
);