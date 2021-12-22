import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  const fetchMovies = () => {
    fetch(`https://swapi.dev/api/films`)
      .then(response => response.json())
      .then(response => {
        const films = response.results.map(movie => {
          return {
            id: movie.episode_id,
            openingText: movie.opening_crawl,
            title: movie.title,
            releaseDate: movie.release_date,
          };
        });
        setDummyMovies(films);
      });
  };

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
