import React from "react";

function Filters({ filter, setFilter }) {
  const buttonStyles = (active) => ({
    padding: "0.5rem 1rem",
    margin: "0.25rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: active ? "#2563eb" : "#e5e7eb",
    color: active ? "#fff" : "#374151",
    fontWeight: active ? "bold" : "normal",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  });

  return (
    <div
      style={{
        margin: "1rem 0",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => setFilter("all")}
        style={buttonStyles(filter === "all")}
        onMouseOver={(e) => {
          if (filter !== "all") e.target.style.backgroundColor = "#d1d5db";
        }}
        onMouseOut={(e) => {
          if (filter !== "all") e.target.style.backgroundColor = "#e5e7eb";
        }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        style={buttonStyles(filter === "completed")}
        onMouseOver={(e) => {
          if (filter !== "completed") e.target.style.backgroundColor = "#d1d5db";
        }}
        onMouseOut={(e) => {
          if (filter !== "completed") e.target.style.backgroundColor = "#e5e7eb";
        }}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        style={buttonStyles(filter === "pending")}
        onMouseOver={(e) => {
          if (filter !== "pending") e.target.style.backgroundColor = "#d1d5db";
        }}
        onMouseOut={(e) => {
          if (filter !== "pending") e.target.style.backgroundColor = "#e5e7eb";
        }}
      >
        Pending
      </button>
    </div>
  );
}

export default Filters;
