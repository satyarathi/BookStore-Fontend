import React, { useState, useEffect } from "react";
import "./bookpage.css";
import { getById } from "../services/BookService";
import book22 from "../requiredItems//book.png";
import Header from "../components/header/header";
import { IconButton, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { addedToCart, removeFromCart } from "./../services/CartService";
// import {
//   addBookToWishList,
//   removeBookFromWishList,
// } from "../services/WishListServices.js";

function Bookpage() {
  const [book, setBooks] = useState([]);
  const [showCounter, setShowCounter] = useState(false);
  const [counter, setCounter] = useState(1);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getById(id)
      .then((res) => {
        setBooks(res.data.data);
        // setCounter(res.data.data.quantity);
        // setShowCounter(res.data.data.quantity ? true : false);
      })
      .catch((err) => console.error("error :", err));
  }, []);

  const addBookToCart = () => {
    addedToCart(id)
      .then((res) => {
        console.log("response", res.data);
      })
      .catch((err) => {
        alert("Book is not added to cart");
        console.error("error :", err);
      });
  };

  const removeBookToCart = () => {
    removeFromCart(id)
      .then((res) => {
        console.log("response", res.data);
      })
      .catch((err) => {
        alert("Book is not removed from cart");
        console.error("error :", err);
      });
  };
  return (
    <div>
      <Header />
      <div className="top">
        <div className="headings">Home /Book(01) </div>
      </div>
      {/* {books.map((book, index) => ( */}
      <div className="main-bookcontainer">
        <div className="left-side">
          <div className="img-Book">
            <img src={book22} alt="img" />
          </div>
          <div className="book-button">
            {showCounter ? (
              <div className="counter">
                <button
                  className="reduce-counter"
                  onClick={() => {
                    setCounter(counter - 1);
                    removeBookToCart();
                  }}
                  disabled={counter < 2}
                >
                  -
                </button>
                <div className="counter-value">{counter}</div>
                <button
                  className="increase-counter"
                  onClick={() => {
                    setCounter(counter + 1);
                    addBookToCart();
                  }}
                >
                  +
                </button>
              </div>
            ) : (
              <IconButton
                variant="contained"
                size="small"
                style={{ margin: "5px", border: "1px solid #ac3b48" }}
                onClick={() => {
                  setShowCounter(true);
                  addBookToCart();
                }}
              >
                ADD TO BAG
              </IconButton>
            )}
            {addedToWishlist ? (
              <IconButton
                style={{
                  margin: "5px",
                  border: "1px solid #ac3b48",
                }}
                // onClick={() => {
                //   removeBookFromWishList(id)
                //     .then((res) => {
                //       setAddedToWishlist(false);
                //       console.log("response", res.data);
                //     })
                //     .catch((err) => console.error("error :", err));
                // }}
              >
                Remove from WISHLIST
              </IconButton>
            ) : (
              <IconButton
                style={{
                  margin: "5px",
                  border: "1px solid #ac3b48",
                }}
                // onClick={() => {
                //   addBookToWishList(id)
                //     .then((res) => {
                //       setAddedToWishlist(true);
                //       console.log("response", res.data);
                //     })
                //     .catch((err) => console.error("error :", err));
                // }}
              >
                WISHLIST
              </IconButton>
            )}
          </div>
        </div>
        <div className="right-content">
          <div className="title">{book.bookName} </div>
          <div className="auther">by {book.author}</div>
          <div className="pricebook">
            <div className="dis-price">Rs. {book.discountPrice} </div>
            <div className="real-price">Rs. {book.price}</div>
          </div>
          <hr />
          <div className="book-description">
            <div className="detail">
              <h3>&bull;Book Detail</h3>
            </div>
            <div className="descrip"> {book.description}</div>
            <hr />
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Bookpage;
