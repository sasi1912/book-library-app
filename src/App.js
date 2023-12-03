import logo from "./logo.svg";
import "./App.css";
import { Books } from "./MyComponents/Books";
import { AddBook } from "./MyComponents/AddBook";
import React, { useState, useEffect } from "react";

function App() {
  let initBook;
  if (localStorage.getItem("books") === null) {
    initBook = [];
  } else {
    initBook = JSON.parse(localStorage.getItem("books"));
  }
  const onDelete = (book) => {
    setBooks(
      books.filter((e) => {
        return e !== book;
      })
    );
    localStorage.setItem("books", JSON.stringify(books));
  };
  const addBook = (title, author, year) => {
    const myBook = { title: title, author: author, year: year };
    setBooks([...books, myBook]);
    console.log(myBook);
  };
  const [books, setBooks] = useState(initBook);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <>
      <AddBook addBook={addBook} />
      <Books books={books} onDelete={onDelete} />
    </>
  );
}

export default App;
