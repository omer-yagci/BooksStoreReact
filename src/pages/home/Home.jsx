import React, { useState, useEffect } from "react";
import homeStyles from "../home/home.module.scss";
import axios from "axios";
import BooksCard from "../../components/bookscard/BooksCard";
import SearchSection from "../../components/searchsection/SearchSection";

const Home = () => {
  const [value, setValue] = useState("");
  const [booksDatas, setBooksDatas] = useState([]);
  // const [loading, setLoading] = useState(false);

  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

  const URL = `https://www.googleapis.com/books/v1/volumes?q=react&key=${GOOGLE_KEY}`;

  const SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${GOOGLE_KEY}`;

  const getDataFromAPI = async (url) => {
    try {
      const { data } = await axios.get(url);
      setBooksDatas(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromAPI(URL);
  }, [URL]);
  return (
    <>
      <SearchSection
        setValue={setValue}
        getDataFromAPI={getDataFromAPI}
        SEARCH_URL={SEARCH_URL}
        value={value}
      />
      <main className={homeStyles.main}>
        {booksDatas?.items?.map((booksData) => {
          let thumbnail =
            booksData.volumeInfo.imageLinks &&
            booksData.volumeInfo.imageLinks.smallThumbnail;
          let amount =
            booksData.saleInfo.listPrice && booksData.saleInfo.listPrice.amount;
          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <BooksCard
                key={booksData.id}
                booksData={booksData}
                value={value}
              />
            );
          }
        })}
      </main>
    </>
  );
};

export default Home;
