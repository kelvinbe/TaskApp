import React, { useState, useEffect } from "react";
import API from "./api/api";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import Filters from "./Components/Filters";
import Pagination from "./Components/Pagination";
import Loader from "./Components/Loader";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      let url = `/tasks/?page=${page}`;
      if (filter !== "all") {
        url += `&is_completed=${filter === "completed"}`;
      }
      const res = await API.get(url);
      setTasks(res.data.results);
      setTotalPages(Math.ceil(res.data.count / 5));
    } catch {
      setError("Failed to load tasks");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter, page]);

  const addTask = async (newTask) => {
    await API.post("/tasks/", newTask);
    fetchTasks();
  };

  const updateTask = async (id, updatedFields) => {
    await API.patch(`/tasks/${id}/`, updatedFields);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}/`);
    fetchTasks();
  };

  return (
    <div className="container" style={{display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: "center"}}>
      <div>
      <h1>Task Manager</h1>

      <TaskForm onAdd={addTask} />
      <Filters filter={filter} setFilter={setFilter} />
      {loading ? (
        <Loader />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <TaskList
            tasks={tasks}
            onToggle={(id, is_completed) =>
              updateTask(id, { is_completed: !is_completed })
            }
            onDelete={deleteTask}
            onEdit={updateTask}
          />
          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
        
      )}
      </div>
    </div>
  );
}

export default App;
