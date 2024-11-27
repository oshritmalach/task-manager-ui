import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './App.css';

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleTaskAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div>

            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList key={refresh} />

        </div>
    );
}

export default App;

