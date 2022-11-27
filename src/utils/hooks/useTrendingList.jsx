import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(ret => setMovies(ret));
  }, []);

  return { trendingMovies };
};  