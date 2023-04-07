import React, { useEffect, useState } from "react";
import "./books.css";
import book22 from "../../requiredItems/book.png";
import { getAllBooks } from "../../services/BookService";

import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooks()
      .then((res) => {
        console.log("ressss", res);
        setBooks(res.data.data);
      })
      .catch((err) => console.error("error :", err));
  }, []);
  return (
    <div className="books">
      <div className="book-heading">
        <h2>Books</h2>
        <span>sort</span>
      </div>
      <div className="main-body22">
        {books.map((book, index) => (
          <div className="card" key={index}>
            <Link to={`/bookpage/${book._id}`}>
              <div className="book-image">
                <img src={book22} alt="book" />
              </div>
              <div className="bottom-card">
                <h4 className="book-name">{book.bookName}</h4>
                <div className="author">by {book.author}</div>
                <div className="book-price">
                  Rs. {book.discountPrice}{" "}
                  <span className="actual-price">Rs. {book.price}</span>{" "}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
