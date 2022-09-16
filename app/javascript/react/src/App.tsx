import React from "react";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Airline from "./components/Airline/Airline";
import Airlines from "./components/Airlines/Airlines";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/airline/:slug" element={<Airline />} />
        <Route path="/airlines" element={<Airlines />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
