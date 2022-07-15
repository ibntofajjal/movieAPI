/* Source Code Link : https://github.com/thapatechnical/moviewebsite/tree/master/src */

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// React_Components
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SingleMovie from "./Components/SingleMovie/SingleMovie";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movie/:id" element={<SingleMovie />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
