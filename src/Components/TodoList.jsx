import "../style.css";
import { useState } from "react";

function TodoList() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (task !== "") {
            setTaskList([...taskList, task]);
            setTask("");
        }
    }

    const removeTask = (index) => {
        setTaskList(taskList.filter((task, i) => i !== index));
        setTask("");
    }

  return (
    <div className="container">
        <h1>Todo List</h1>
        <form onSubmit={addTask}>
            <input type="text" value={task} onChange={handleChange} />
            <button type="submit">Add Task</button>
        </form>
        <ul className="todos-list">
            {taskList.map((task, index) => {
            return (
            <li key={index} className="todo">{task}
            <button className="close" onClick={() => removeTask(index)}>x</button>
            </li>
        )
            })}
        </ul>
    </div>
  )
}

export default TodoList


