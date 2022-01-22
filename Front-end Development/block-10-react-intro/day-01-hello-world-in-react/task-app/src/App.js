const Task = (value) => <li key={value}>{value}</li>;

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7'];

function App() {
  return <ul>{tasks.map((task) => Task(task))}</ul>;
}

export default App;
