import { useEffect, useState } from "react";
import TaskForm from "../Components/forms/TaskForm";
import TasksTable from "../Components/table/TasksTable";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await fetch("https://crm-sales-dashboard-backend.onrender.com/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://crm-sales-dashboard-backend.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tasks Management</h1>
      <p className="text-gray-500 mb-6">
        Manage your daily CRM tasks.
      </p>

      <TaskForm
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <TasksTable
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Tasks;