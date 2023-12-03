import React from "react";

export default function Book({ book, onDelete }) {
  return (
    <div>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(book)}>
        Delete
      </button>
    </div>
  );
}
