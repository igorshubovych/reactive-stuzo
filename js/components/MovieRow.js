import React from 'react';

export default ({ movie, update, index, active }) => {
  console.log('Movie: '+ movie.Title + ' active: '+ active);
  return (
    <tr onClick={() => update({ active: index })}
      className={active ? 'warning' : ''}>
      <td>{movie.Title}</td>
      <td>{movie.Year}</td>
      <td>{movie.imdbRating}</td>
    </tr>
  );
};
