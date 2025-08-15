import React from "react";

function Pagination({ page, totalPages, setPage }) {
  const buttonStyle = {
    padding: "0.5rem 1rem",
    margin: "0 0.5rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  const disabledStyle = {
    ...buttonStyle,
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  };

  return (
    <div style={{ margin: "1rem 0", textAlign: "center" }}>
      <button
        style={page === 1 ? disabledStyle : buttonStyle}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <span style={{ margin: "0 1rem", fontSize: "1rem", fontWeight: "500" }}>
        Page {page} of {totalPages}
      </span>
      <button
        style={page === totalPages ? disabledStyle : buttonStyle}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
