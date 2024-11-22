import React, { Component } from "react";
import "./ToDoApp.css";
class ToDoAppWithoutHook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: "",
    };
  }

  // Handle input change
  handleInputChange = (event) => {
    this.setState({ task: event.target.value });
  };

  // Add task
  addTask = () => {
    const { tasks, task } = this.state;
    if (task.trim() !== "") {
      this.setState({
        tasks: [...tasks, { text: task, completed: false }],
        task: "",
      });
    }
  };

  // Toggle task completion
  toggleTaskCompletion = (index) => {
    const tasks = [...this.state.tasks];
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  // Delete task
  deleteTask = (index) => {
    const tasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks });
  };

  render() {
    const { tasks, task } = this.state;

    return (
      <div className="App">
        <h1>To-Do App</h1>
        <div>
          <input
            type="text"
            value={task}
            onChange={this.handleInputChange}
            placeholder="Add a new task"
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => this.toggleTaskCompletion(index)}
              >
                {t.text}
              </span>
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoAppWithoutHook;