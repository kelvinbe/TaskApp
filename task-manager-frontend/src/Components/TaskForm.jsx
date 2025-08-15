import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description: "", is_completed: false });
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1rem",
        display: "flex",
        gap: "0.5rem",
        // flexWrap: "wrap",
        justifyContent: "center",
        padding: "0.5rem",
      }}
    >
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          flex: "1 1 250px",
          minWidth: "200px",
          padding: "0.6rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.6rem 1rem",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
          flex: "0 0 auto",
        }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = "#45a049")
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = "#4CAF50")
        }
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;