import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
  const [movieReviews, setReviews] = useState([]);

  useEffect(() => {
    API.getMoviesReviews(movieId).then(ret => setReviews(ret));
  }, [movieId]);
  return { movieReviews };
};