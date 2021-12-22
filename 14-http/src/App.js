import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);

  const fetchMovies = async () => {
      const response = await fetch(`https://swapi.dev/api/films`);
      const data = await response.json();
      const films = data.results.map(movie => {
        return {
          id: movie.episode_id,
          openingText: movie.opening_crawl,
          title: movie.title,
          releaseDate: movie.release_date,
        };
      });
      setDummyMovies(films);
  };
  // const fetchMovies = () => {
  //   fetch(`https://swapi.dev/api/films`)
  //     .then(response => response.json())
  //     .then(response => {
  //       const films = response.results.map(movie => {
  //         return {
  //           id: movie.episode_id,
  //           openingText: movie.opening_crawl,
  //           title: movie.title,
  //           releaseDate: movie.release_date,
  //         };
  //       });
  //       setDummyMovies(films);
  //     });
  // };

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </>
  );
}

export default App;
