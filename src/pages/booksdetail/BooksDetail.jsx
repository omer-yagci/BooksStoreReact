import React from "react";
import { useLocation } from "react-router-dom";

const BooksDetail = () => {
  const location = useLocation();

  // Get data with using useLocation func.

  const booksData = location.state;
  // console.log(booksData);
  // const { id } = booksData;
  // console.log(id);
  return <div>BooksDetail</div>;
};

export default BooksDetail;
