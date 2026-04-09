import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'
import TaskCount from './components/TaskCount'

// Filter logic lives here — line 8. Easy to find, easy to change.
function getFilteredTasks(tasks, filter) {
  if (filter === 'active')    return tasks.filter(t => !t.completed)
  if (filter === 'completed') return tasks.filter(t =>  t.completed)
  return tasks
}

let nextId = 1

export default function App() {
  const [tasks, setTasks]   = useState([])
  const [filter, setFilter] = useState('all')

  function addTask(title) {
    setTasks(prev => [...prev, { id: nextId++, title, completed: false }])
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  const visibleTasks  = getFilteredTasks(tasks, filter)
  const remainingCount = tasks.filter(t => !t.completed).length

  return (
    <div className="app">
      <header>
        <h1 className="app-title">TaskFlow</h1>
        <p className="app-subtitle">Stay focused. Ship what matters.</p>
      </header>

      <TaskInput onAdd={addTask} />
      <TaskFilter current={filter} onChange={setFilter} />
      <TaskList tasks={visibleTasks} onToggle={toggleTask} />
      <TaskCount remaining={remainingCount} />
    </div>
  )
}
