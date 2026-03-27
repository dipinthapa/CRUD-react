import { createContext, useState, useEffect } from "react";
import { getPosts } from "../api/api";

// create context
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

// provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]
  );

  useEffect(() => {
    getPosts().then((posts) => setUsers(posts))
  }, []);
  // CREATE
 

  return (
    <UserContext.Provider
      value={{ users, setUsers}}
    >
      {children}
    </UserContext.Provider>
  );
};