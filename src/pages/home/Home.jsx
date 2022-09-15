import React, { useState } from "react";
import homeStyles from "../home/home.module.scss";
import axios from "axios";
import BooksCard from "../../components/bookscard/BooksCard";

const Home = () => {
  const [value, setValue] = useState("");
  const [booksDatas, setBooksDatas] = useState([]);

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    console.log("zaaaa");
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    getDataFromAPI();
    setValue(event.target.value);
  };
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

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className={homeStyles["form-container"]}
      >
        <input
          onChange={inputChangeHandler}
          type="search"
          className={homeStyles.input}
        />
        <button className={homeStyles.btn}>Search</button>
      </form>
      <main className={homeStyles.main}>
        {booksDatas?.items?.map((booksData) => {
          return <BooksCard key={booksData.id} booksData={booksData} />;
        })}
      </main>
    </>
  );
};

export default Home;
