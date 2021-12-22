import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{new Date(props.releaseDate).toLocaleDateString()}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
