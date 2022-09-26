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
  const { volumeInfo } = booksData;

  return (
    <>
      <div onClick={clickHandler} className={booksCardStyles.card}>
        <h3>{volumeInfo.title} </h3>
        <div className={booksCardStyles.images}>
          {volumeInfo.title ? (
            <>
              <img
                src={
                  volumeInfo.imageLinks.smallThumbnail
                    ? volumeInfo.imageLinks.smallThumbnail
                    : defaultImage
                }
                alt={volumeInfo.title}
              />
            </>
          ) : (
            <>{<img src={defaultImage} alt={volumeInfo.title} />}</>
          )}
        </div>
      </div>
    </>
  );
};

export default BooksCard;
