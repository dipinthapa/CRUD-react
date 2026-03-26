import React from "react";
import User from "./components/create-user/User";
import View from "./components/view-user/View";
import { Routes, Route } from "react-router-dom";
import Home from "./components/landingPage/Home";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route  index element={<User />} />
        <Route path="view" element={<View />} />
      </Route>
    </Routes>
  );
}
