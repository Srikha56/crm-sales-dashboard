import { useState, useEffect } from "react";

const TaskForm = ({ fetchTasks, editingTask, setEditingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    assignedTo: "",
    dueDate: "",
    priority: "Medium",
    status: "Pending",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingTask) {
      await fetch(`http://localhost:3000/tasks/${editingTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          id: editingTask.id,
        }),
      });

      setEditingTask(null);
    } else {
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }

    fetchTasks();

    setFormData({
      title: "",
      assignedTo: "",
      dueDate: "",
      priority: "Medium",
      status: "Pending",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          name="assignedTo"
          placeholder="Assigned To"
          value={formData.assignedTo}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="border rounded-lg p-2"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-lg p-2"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        {editingTask ? "Update Task" : "Save Task"}
      </button>
    </form>
  );
};

export default TaskForm