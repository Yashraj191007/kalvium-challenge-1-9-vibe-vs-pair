export default function TaskCount({ remaining }) {
  return (
    <p className="task-count" aria-live="polite">
      <strong>{remaining}</strong> task{remaining !== 1 ? 's' : ''} remaining
    </p>
  )
}
