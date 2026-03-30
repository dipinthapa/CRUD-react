import React from "react";
import User from "./components/create-user/User";
import View from "./components/view-user/View";
import { Routes, Route } from "react-router-dom";
import Home from "./components/landingPage/Home";
import Layout from "./components/Layout";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route
          index
          element={
            <User
              users={users}
              setUsers={setUsers}
              editUser={editUser}
              setEditUser={setEditUser}
            />
          }
        />
        <Route
          path="view"
          element={
            <View users={users} setUsers={setUsers} setEditUser={setEditUser} />
          }
        />
      </Route>
    </Routes>
  );
}
