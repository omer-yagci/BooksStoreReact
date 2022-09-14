import React, { useState } from "react";
import homeStyles from "../home/home.module.scss";
import axios from "axios";
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

  const getDataFromAPI = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://hapi-books.p.rapidapi.com/search/${value}`,
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_HAPI_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      };

      await axios.request(options).then(function (response) {
        setBooksDatas(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(booksDatas);
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
    </>
  );
};

export default Home;
