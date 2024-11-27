import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';
import ErrorMessage from "./Errors";

const TaskList = () => {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [tasks, setTasks] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);


    const fetchTasks = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/tasks`);
            const tasksArray = Object.keys(response.data).map((key) => ({
                id: key,
                ...response.data[key],
            }));
            setTasks(tasksArray);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage("Error get all tasks: " + error.message);
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);



    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`http://localhost:8083/task/${taskId}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            fetchTasks();
            setErrorMessage("");
        } catch (error) {
            setErrorMessage("Error delete task: " + error.message);
        }
    };

    const handleUpdate = (taskId, taskTitle, taskDescription, taskStatus) => {
        setEditingTaskId(taskId);
        setTitle(taskTitle);
        setDescription(taskDescription);
        setStatus(taskStatus);
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedTask = {
                title,
                description,
                status,
            };

            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/task/${editingTaskId}`, updatedTask, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setEditingTaskId(null);
            fetchTasks();
            setErrorMessage("")
        } catch (error) {
            setErrorMessage("Error updating task: " + error.message);
        }
    };


    return (
        <div>
            <h1>Task List</h1>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            {tasks.length === 0 ? (
                <p id="emptyTaskListMessage">
                    There are no tasks yet, but you can add some!
                </p>
            ) : (
            <ul>
                {tasks.map((task) => (
                    <li className="no-tasks-message" key={task.id}>
                        {editingTaskId === task.id ? (
                            <form id="form-list" onSubmit={handleSubmitUpdate}>
                                <div>
                                    <label>Title:</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Description:</label>
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Status:</label>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="InProgress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <button type="submit">
                                    <i className="fas fa-save"></i> Save
                                </button>

                                <button id="update-btn"
                                    type="button"
                                    onClick={() => setEditingTaskId(null)}
                                >
                                    <i className="fas fa-times"></i> Cancel
                                </button>
                            </form>
                        ) : (
                            <>
                                <p><span>Title:</span> {task.title}</p>
                                <p><span>Description:</span> {task.description}</p>
                                <p><span>Status:</span> {task.status}</p>
                                <button onClick={() => handleUpdate(task.id, task.title, task.description, task.status)}>
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button onClick={() => handleDelete(task.id)}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default TaskList;
