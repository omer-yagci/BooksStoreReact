import React from "react";
import { useNavigate } from "react-router-dom";

import booksCardStyles from "../bookscard/bookscard.module.scss";
import defaultImage from "../../assests/default.jpg";

const BooksCard = ({ booksData }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/detail", { state: booksData });
  };
  const {
    volumeInfo: {
      title,
      imageLinks: { thumbnail },
    },
  } = booksData;

  return (
    <>
      <div onClick={clickHandler} className={booksCardStyles.card}>
        <h3>{title} </h3>
        <div className={booksCardStyles.images}>
          <img src={thumbnail ? thumbnail : defaultImage} alt={title} />
        </div>
      </div>
    </>
  );
};

export default BooksCard;
