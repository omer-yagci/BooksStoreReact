import React from "react";
import homeStyles from "../home/home.module.scss";
const Home = () => {
  return (
    <>
      <form className={homeStyles["form-container"]}>
        <input type="search" className={homeStyles.input} />
        <button className={homeStyles.btn}>Search</button>
      </form>
    </>
  );
};

export default Home;
