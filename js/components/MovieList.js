import React from 'react';
import MovieRow from './MovieRow';

export default ({ data, update, active }) => {
  if (!data) { return (<p>Loading...</p>); }

  const movies = data.map((movie, index) => {
    return (
      <MovieRow movie={ movie }
        key={ movie.imdbID }
        index={ index }
        update={ update }
        active={ index === active } />);
  });

  return (
    <table className="movie-list table table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>IMDB rating</th>
        </tr>
      </thead>

      <tbody>
        {movies}
      </tbody>
    </table>
  );
};
