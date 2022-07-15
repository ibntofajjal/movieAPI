import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const Movies = () => {
  const { movie } = useGlobalContext();

  return (
    <>
      <section className="container movie-page">
        <div className="grid grid-4-col">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.substring(0, 15);
            const movieNameShorting =
              movieName.length >= 15 ? `${movieName} ...` : movieName;

            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{movieNameShorting}</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
