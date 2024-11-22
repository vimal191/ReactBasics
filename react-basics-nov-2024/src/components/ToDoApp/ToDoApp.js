import React, { useState } from "react";
import "./ToDoApp.css";

function ToDoApp() {
  // State for tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="ToDoApp">
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTaskCompletion(index)}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;