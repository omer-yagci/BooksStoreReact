import { createContext, useContext } from "react";

// ! Defining context
export const BooksContext = createContext();

// ! Consume function (Custom hook)
export const UseBooksContext = () => {
  return useContext(BooksContext);
};

const values = {};

const AutContext = ({ children }) => {
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export default AutContext;
