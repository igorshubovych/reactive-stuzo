import React from 'react';

export default ({ data, active }) => {
  if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }

  const movie = data[active];

  return (
    <div className="thumbnail">
      <img src={movie.Poster} className="movie-details-poster" />

      <div className="thumbnail-caption">
        <h3>{movie.Title}</h3>
        <table className="movie-info table table-responsive">
          <tbody>
            <tr>
              <td>Actors:</td>
              <td>{movie.Actors}</td>
            </tr>
            <tr>
              <td>Year:</td>
              <td>{movie.Year}</td>
            </tr>
            <tr>
              <td>IMDB rating:</td>
              <td>{movie.imdbRating}</td>
            </tr>
          </tbody>
        </table>

        <p><b>Awards:</b> {movie.Awards}</p>
      </div>
    </div>
  );
};
