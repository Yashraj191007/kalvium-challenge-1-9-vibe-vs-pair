import { useState } from 'react'

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState('')

  function handleSubmit() {
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <div className="card">
      <div className="input-row">
        <input
          id="task-input"
          className="task-input"
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          autoComplete="off"
          maxLength={200}
        />
        <button id="add-task-btn" className="add-btn" onClick={handleSubmit}>
          Add Task
        </button>
      </div>
    </div>
  )
}
