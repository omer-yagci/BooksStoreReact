import { createContext, useContext, useState } from "react";

// ! Defining context
export const BooksContext = createContext();

// ! Consume function (Custom hook)
export const UseBooksContext = () => {
  return useContext(BooksContext);
};

const AutContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);
  const values = { currentUser };
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export default AutContext;
