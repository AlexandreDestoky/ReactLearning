import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://swapi.dev/api/film`);

      if(!response.ok) throw new Error("FAILED REQUEST");
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
      setError(false)
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <div id="loading"></div>}
        {!isLoading && <MoviesList movies={dummyMovies} />}
        {!isLoading && !error && dummyMovies.length === 0 && <p>Click on fetch button to fetch movies</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </>
  );
}

export default App;
