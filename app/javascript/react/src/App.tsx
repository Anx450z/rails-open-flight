import React from "react";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
