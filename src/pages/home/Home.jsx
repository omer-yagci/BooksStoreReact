import React, { useState } from "react";
import homeStyles from "../home/home.module.scss";
import axios from "axios";
import BooksCard from "../../components/bookscard/BooksCard";
import SearchSection from "../../components/searchsection/SearchSection";
import { useEffect } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [booksDatas, setBooksDatas] = useState([]);

  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

  const URL = `https://www.googleapis.com/books/v1/volumes?q=html&key=${GOOGLE_KEY}`;

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
  }, []);

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
          return <BooksCard key={booksData.id} booksData={booksData} />;
        })}
      </main>
    </>
  );
};

export default Home;
