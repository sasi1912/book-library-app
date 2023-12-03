import React from "react";
import Book from "./Book";

export const Books = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Books List</h3>
      {props.books.length === 0
        ? "No books to display"
        : props.books.map((book) => {
            return <Book book={book} key={book} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
