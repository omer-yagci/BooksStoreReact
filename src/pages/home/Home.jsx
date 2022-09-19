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

  const URL = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${GOOGLE_KEY}`;

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(URL);
      setBooksDatas(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [value]);

  return (
    <>
      <SearchSection setValue={setValue} getDataFromAPI={getDataFromAPI} />
      <main className={homeStyles.main}>
        {booksDatas?.items?.map((booksData) => {
          return <BooksCard key={booksData.id} booksData={booksData} />;
        })}
      </main>
    </>
  );
};

export default Home;
