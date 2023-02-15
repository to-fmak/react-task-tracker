import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "hi",
      day: "0214",
      reminder: true,
    },
    {
      id: 2,
      text: "hello",
      day: "0214",
      reminder: false,
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} /> : "No Tasks To Show"}
    </div>
  );
}

export default App;
