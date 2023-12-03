import React, { useState } from "react";
import "./book.css";

export const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) {
      alert("Title, Author or year cannot be blank");
    } else {
      addBook(title, author, year);
      setTitle("");
      setAuthor("");
      setYear("");
    }
  };
  return (
    <div className="container">
      <h3>Add a Book</h3>
      <form onSubmit={submit}>
        <div className="input-field">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Book Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Book Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              className="form-control"
              id="author"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Published Year
            </label>
            <input
              type="text"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              className="form-control"
              id="year"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="button">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};
