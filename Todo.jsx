import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task"
      />
    </div>
  );
};

export default Todo;
