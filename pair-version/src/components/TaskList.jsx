export default function TaskList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-card">
        <div className="empty">
          <span className="empty-icon">✦</span>
          <p>No tasks here.<br />Add one above to get started.</p>
        </div>
      </div>
    )
  }

  return (
    <ul className="task-list-card" role="list" aria-label="Task list">
      {tasks.map(task => (
        <li
          key={task.id}
          className="task-item"
          role="listitem"
          onClick={() => onToggle(task.id)}
          aria-label={`${task.title} — ${task.completed ? 'completed' : 'active'}`}
        >
          <div className={`circle${task.completed ? ' done' : ''}`}>
            {task.completed && '✓'}
          </div>
          <span className={`task-title${task.completed ? ' done' : ''}`}>
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  )
}
