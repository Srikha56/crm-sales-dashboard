function TasksTable({ tasks, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Task</th>
            <th className="p-3">Assigned To</th>
            <th className="p-3">Due Date</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="p-3">{task.title}</td>
              <td className="p-3">{task.assignedTo}</td>
              <td className="p-3">{task.dueDate}</td>
              <td className="p-3">{task.priority}</td>
              <td className="p-3">{task.status}</td>

              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onEdit(task)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasksTable;