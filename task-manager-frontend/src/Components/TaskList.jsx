import React, { useState } from "react";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  const saveEdit = (id) => {
    onEdit(id, { title: editTitle });
    setEditId(null);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0, maxWidth: 400, margin: "0 auto" }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#f9f9f9",
            padding: "10px 12px",
            marginBottom: "8px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
            <input
              type="checkbox"
              checked={task.is_completed}
              onChange={() => onToggle(task.id, task.is_completed)}
            />
            {editId === task.id ? (
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{
                  flex: 1,
                  padding: "6px",
                  borderRadius: "4px",
                  border: "1px solid #ccc"
                }}
              />
            ) : (
              <span
                style={{
                  textDecoration: task.is_completed ? "line-through" : "none",
                  color: task.is_completed ? "#999" : "#333",
                  fontSize: "16px"
                }}
              >
                {task.title}
              </span>
            )}
          </div>

          {editId === task.id ? (
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={() => saveEdit(task.id)}
                style={{
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                style={{
                  background: "#ccc",
                  color: "black",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={() => handleEdit(task)}
                style={{
                  background: "#2196F3",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                style={{
                  background: "#f44336",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
