import React from "react";

import { BsSearch } from "react-icons/bs";
import searchStyles from "../searchsection/search.module.scss";

const SearchSection = ({ setValue, getDataFromAPI }) => {
  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    console.log("zaaaa");
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    getDataFromAPI();
    setValue(event.target.value);
  };
  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className={searchStyles["form-container"]}
      >
        <input
          onChange={inputChangeHandler}
          type="search"
          className={searchStyles.input}
        />
        <button className={searchStyles.btn}>
          <BsSearch className={searchStyles.icon} />
        </button>
      </form>
    </>
  );
};

export default SearchSection;
