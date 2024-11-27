import React, { useState } from "react";
import axios from "axios";
import '../App.css';
import ErrorMessage from './Errors';


const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/task`,
                {
                    title,
                    description,
                    status,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setTitle("");
            setDescription("");
            setStatus("");
            onTaskAdded()
            setErrorMessage("");

        } catch (error) {
            setErrorMessage("Error adding task: " + error.message);
        }
    };

    return (
        <div>
        <h1>Add Task</h1>
            {errorMessage && <ErrorMessage message={errorMessage} />}
        <form id="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
            >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <button type="submit">Add Task</button>
        </form>
        </div>
    );
};

export default TaskForm;
