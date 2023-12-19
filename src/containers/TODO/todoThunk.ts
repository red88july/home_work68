import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {Tasks, TasksList} from "../../types";

export const postTask = createAsyncThunk<void, string>(
  'todo/postTask', async (task: string) => {
    const payloadData = {
      task: task,
    };
   await axiosApi.post<string | null>('/task.json', payloadData);
  }
);

export const getTask = createAsyncThunk<Tasks[]>(
  'todo/getTask', async () => {
    const responseGet = await axiosApi.get<TasksList | null>('/task.json');
    const task = responseGet.data;

    if (!task) {
        return [];
    }

    return Object.keys(task).map(key => {
        const taskKey = task[key];
        return {
            ...taskKey,
            id:key,
        };
    });
  }
);