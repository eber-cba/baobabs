import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./common/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
