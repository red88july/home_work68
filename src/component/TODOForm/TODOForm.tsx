import React, {useEffect, useState} from 'react';
import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {getTask, postTask} from '../../containers/TODO/todoThunk';
import {Tasks} from "../../types";

const TodoForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const getTasksFromServer = useSelector((state: RootState) => state.task);
    const [task, setTask] = useState('');

    const inputSet = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await dispatch(postTask(task));
        } catch (e) {
            console.log(`Fetched task is error ${e}`);
        }
        setTask('');
    };

    useEffect(() => {
        if (!getTasksFromServer)
            dispatch(getTask());
    }, [dispatch, getTasksFromServer]);

    const objectKeysGet: Tasks[] = getTasksFromServer ? Object.values((getTasksFromServer)) : [];

    return (
        <>
            <div className="d-flex gap-5 mt-5">
                <div className="d-flex flex-column ms-5">
                    {objectKeysGet.map((task, index) => (
                        <div key={index}
                             className="border border-3 border-secondary rounded-3 text-center mb-2 d-flex flex-column p-3">
                            <p className="text-center mb-1">{task.task}</p>
                            <div className="d-flex gap-2">
                                <span>Status:</span>
                                <input className="form-check-input me-1" type="checkbox" id="firstCheckbox"/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="ms-5 mt-5">
                    <form onClick={onFormSubmit}
                          className="d-flex flex-column justify-content-start border border-3 border-success-subtle rounded-2 p-2 w-100">
                        <label htmlFor="input-task" className="mb-1 form-label">Input task</label>
                        <input
                            name="task"
                            id="input-task"
                            className="form-control mb-2"
                            type="text"
                            value={task}
                            onChange={inputSet}
                            required
                            autoFocus/>
                        <button type="submit" className="btn btn-success p-3">
                            Add task
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TodoForm;