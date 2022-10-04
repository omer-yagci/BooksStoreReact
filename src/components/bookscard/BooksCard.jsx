import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import booksCardStyles from "../bookscard/bookscard.module.scss";
import defaultImage from "../../assests/default.jpg";
import Spinner from "../../helpers/Spinner";

const BooksCard = ({ booksData }) => {
  console.log(booksData);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const clickHandler = () => {
    navigate("/detail", { state: booksData });
  };
  const { volumeInfo } = booksData;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <div onClick={clickHandler} className={booksCardStyles.card}>
        <h3>{volumeInfo.title} </h3>
        <div className={booksCardStyles.images}>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <img
                src={
                  volumeInfo.imageLinks.thumbnail
                    ? volumeInfo.imageLinks.thumbnail
                    : defaultImage
                }
                alt={volumeInfo.title}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BooksCard;
