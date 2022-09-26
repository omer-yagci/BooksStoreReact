import React from "react";
import { useNavigate } from "react-router-dom";

import booksCardStyles from "../bookscard/bookscard.module.scss";
import defaultImage from "../../assests/default.jpg";

const BooksCard = ({ booksData }) => {
  console.log(booksData);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/detail", { state: booksData });
  };
  const {
    volumeInfo: {
      title,
      // imageLinks: { thumbnail, smallThumbnail },
    },
  } = booksData;

  return (
    <>
      <div onClick={clickHandler} className={booksCardStyles.card}>
        <h3>{title} </h3>
        <div className={booksCardStyles.images}>
          {title ? (
            <>{/* <img src={thumbnail} alt={title} /> */}p</>
          ) : (
            <>
              <img src={defaultImage} alt={title} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BooksCard;
