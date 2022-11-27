// import { useSearchMovies } from 'utils/hooks/useSearchMovies';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../utils/api/apiMoviedb';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    setSearchParams({ movieTitle: e.target[0].value });
    e.preventDefault();
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('movieTitle');
    if (movieTitle) {
      API.searchMovies(movieTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
};