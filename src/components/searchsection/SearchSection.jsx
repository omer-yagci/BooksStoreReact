import React from "react";
import { BsSearch } from "react-icons/bs";
import searchStyles from "../searchsection/search.module.scss";
import { UseBooksContext } from "../../context/AutContext";
import { toastWarnNotify } from "../../helpers/ToastNotify";

const SearchSection = ({ setValue, getDataFromAPI, SEARCH_URL, value }) => {
  const { currentUser } = UseBooksContext();
  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (value && currentUser) {
      getDataFromAPI(SEARCH_URL);
      setValue(event.target.value);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search book");
    } else {
      toastWarnNotify("Enter a text");
    }
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
