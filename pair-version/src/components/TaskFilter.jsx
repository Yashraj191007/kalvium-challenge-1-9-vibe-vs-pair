const FILTERS = ['all', 'active', 'completed']

export default function TaskFilter({ current, onChange }) {
  return (
    <nav className="filters" aria-label="Filter tasks">
      {FILTERS.map(f => (
        <button
          key={f}
          id={`filter-${f}`}
          className={`filter-btn${current === f ? ' active' : ''}`}
          onClick={() => onChange(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </nav>
  )
}
