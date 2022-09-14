import { createContext, useContext, useState, useEffect } from "react";
import { userObserver } from "../auth/firebase";

// ! Defining context
export const BooksContext = createContext();

// ! Consume function (Custom hook)
export const UseBooksContext = () => {
  return useContext(BooksContext);
};

const AutContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
    userObserver(setCurrentUser);
  }, []);

  const values = { currentUser };
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export default AutContext;
