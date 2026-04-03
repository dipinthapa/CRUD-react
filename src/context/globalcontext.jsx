import { createContext, useState, useEffect } from "react";
import { getPosts } from "../api/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setUsers(posts));
  }, []);

  // CREATE
  const handleCreate = (newUser) => {
    setUsers((prev) => [
      ...prev,
      { ...newUser, id: Date.now() },
    ]);
  };

  // UPDATE
  const handleUpdate = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setEditUser(null);
  };

  // DELETE
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));

    if (editUser?.id === id) {
      setEditUser(null);
    }
  };

  // EDIT
  const handleEdit = (user, navigate) => {
    setEditUser(user);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        users,
        editUser,
        handleCreate,
        handleUpdate,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
