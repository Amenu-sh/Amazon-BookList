import React from "react";
// import { Component } from 'react';
import ReactDom from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/61dEb1tVCTL._SL1500_.jpg",
    title: "Designing the Mind",
    author: "Ryan A Bush",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61ctngWorgL._SL1500_.jpg",
    title: "Reminders of Him",
    author: "Colleen Hoover",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/61ItdHEnQmL.jpg",
    title: "The Women",
    author: "Kristin Hannah",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51wf0Ti1DsL.jpg",
    title: "Hello Beautiful",
    author: "Ann Napolitano",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/91F6NVlGGjL._SL1500_.jpg",
    title: "Trust",
    author: "Hernan Diaz",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ id, img, title, author }) => {
  //attribute, event handler
  //onClick, onMouseOver
  // const onMouseOver = () => {
  //   alert("Hello World");
  // };
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("This is Amazon bestseller Book");
  };
  const showAuthor = (author) => {
    console.log(author);
    return author;
  };
  return (
    <article className="book">
      <h2>Amazon best-Seller #{id}</h2>
      <img src={img} alt="" />
      {/* inline function  */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* // referencing the function */}
      <button type="button" onClick={clickHandler}>
        what is this?
      </button>
      <button type="button" onClick={() => showAuthor(author)}>
        Open Author in Console
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
