import { useState, useCallback } from 'react';

function useArray() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(tasks.concat(task));
  };

  return [tasks, addTask];
}

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, addTask] = useArray();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput('');
  };
  const handleChange = ({ target: { value } }) => {
    setTaskInput(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskInput"
          value={taskInput}
          onChange={handleChange}
        />
        <button type="submit" name="save">
          Save Task
        </button>
      </form>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      ) : (
        <h3>Task list is empty! :(</h3>
      )}
    </>
  );
}

export default App;
