export interface Tasks {
    id: string,
    task: string,
    loading: boolean,
}

export type ApiTasks = Omit<Tasks, 'id'>

export interface TasksList {
    [id: string]: ApiTasks,
}