import React from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import searchStyles from "../searchsection/search.module.scss";

const SearchSection = ({ setValue, getDataFromAPI }) => {
  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    getDataFromAPI();
    setValue(event.target.value);
  };

  return (
    <div className={searchStyles.wrapper}>
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
    </div>
  );
};

export default SearchSection;
