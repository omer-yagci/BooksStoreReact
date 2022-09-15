import React from "react";

import booksCardStyles from "../bookscard/bookscard.module.scss";
import defaultImage from "../../assests/default.jpg";

const BooksCard = ({ booksData }) => {
  console.log(booksData);
  const {
    volumeInfo: {
      title,

      imageLinks: { thumbnail },
    },
  } = booksData;
  return (
    <>
      <div className={booksCardStyles.card}>
        <h3>{title} </h3>
        <div className={booksCardStyles.images}>
          <img src={thumbnail ? thumbnail : defaultImage} alt={title} />
        </div>
        <button className={booksCardStyles.btn}>More Info</button>
      </div>
    </>
  );
};

export default BooksCard;
