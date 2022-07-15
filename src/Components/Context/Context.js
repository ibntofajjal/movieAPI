import React, { createContext, useContext, useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const AppContext = createContext();

// we need to create a provider function
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("Hacker");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 1000);

    return () => clearTimeout(timerOut);
  }, [query]);
  return (
    <AppContext.Provider value={{ isError, isLoading, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// Global Custom Hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
